#!/bin/bash

quote="$1"
name="$2"
picture="$3"
color="${4:-#ff8800}"  # Default color is #ff8800 if not provided
contrast_color=$(./contrast_color.sh "$color")

SITE_DOMAIN="www.disneyquoteoftheday.com"
WIDTH=1024
PADDING=48
PHOTO_SIZE=100
LINE_HEIGHT=64
QUOTE_FONT_SIZE=48
NAME_FONT_SIZE=32
QUOTE_MARK_FONT_SIZE=200
ATTR_FONT_SIZE=24

# Function to wrap text
wrap_text() {
  echo "$1" | fold -w 40 -s
}

# Generate SVG content
wrapped_quote=$(wrap_text "$quote")

height=$(( $(echo "$wrapped_quote" | wc -l) * LINE_HEIGHT + PADDING * 3 + PHOTO_SIZE ))

cat << EOF
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 $WIDTH $height" fill="none">
  <!-- Background Rectangle -->
  <rect width="100%" height="100%" rx="12" fill="$color" />

  <!-- Quote Marks -->
  <text x="$((PADDING / 2))" y="$((QUOTE_MARK_FONT_SIZE - PADDING))" font-size="$QUOTE_MARK_FONT_SIZE" fill="$contrast_color" fill-opacity="0.1" font-family="Times New Roman">
    <tspan font-weight="bold" id="tspan1874">“</tspan>
    <tspan x="$((WIDTH - PADDING / 2 - QUOTE_MARK_FONT_SIZE / 2))" y="$((height - PADDING * 2))" font-weight="bold" id="tspan1874">”</tspan>
  </text>

  <!-- Quote Text -->
  <g transform="translate($PADDING, $((LINE_HEIGHT + PADDING)))">
$(echo "$wrapped_quote" | awk -v QUOTE_FONT_SIZE="$QUOTE_FONT_SIZE" -v CONTRAST_COLOR="$contrast_color" -v LINE_HEIGHT="$LINE_HEIGHT" '{
    y_position = (NR - 1) * LINE_HEIGHT
    printf "    <text x=\"0\" y=\"%s\" font-size=\"%s\" fill=\"%s\" font-family=\"sans-serif\" text-anchor=\"start\">\n      %s\n    </text>\n", y_position, QUOTE_FONT_SIZE, CONTRAST_COLOR, $0
  }')
  </g>

  <!-- Speaker Image and Name -->
  <g>
    <clipPath id="circleMask">
      <circle cx="$((WIDTH - PADDING - PHOTO_SIZE / 2))" cy="$((height - PADDING - PHOTO_SIZE / 2))" r="$((PHOTO_SIZE / 2))" />
    </clipPath>
    <image href="https://$SITE_DOMAIN$picture" x="$((WIDTH - PADDING - PHOTO_SIZE))" y="$((height - PADDING - PHOTO_SIZE))" width="$PHOTO_SIZE" height="$PHOTO_SIZE" clip-path="url(#circleMask)" />
    <text x="$((WIDTH - PADDING - PHOTO_SIZE - PADDING))" y="$((height - PADDING - PHOTO_SIZE / 2 + NAME_FONT_SIZE / 2))" font-size="$NAME_FONT_SIZE" text-anchor="end" font-family="sans-serif" fill="$contrast_color">
      - $name
    </text>
  </g>
  <text y="$((height - ATTR_FONT_SIZE))" x="$((WIDTH / 2))" text-anchor="middle" fill="$contrast_color" font-size="$ATTR_FONT_SIZE">
    $SITE_DOMAIN
  </text>
</svg>
EOF