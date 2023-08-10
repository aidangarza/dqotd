#!/bin/bash

# Check if output directory for SVG files exists, if not, create it
svg_output_dir="../public/quotes"
if [ ! -d "$svg_output_dir" ]; then
    mkdir "$svg_output_dir"
fi

slug="$1"
content="$2"
speaker_name="$3"
speaker_picture="$4"
color="${5:-#ff8800}"  # Default color is #ff8800 if not provided

# Call make_svg_content.sh script to generate SVG content
svg_content=$(./make_svg_content.sh "$content" "$speaker_name" "$speaker_picture" "$color")

# Create SVG file
svg_filename="${svg_output_dir}/${slug}.svg"
echo "$svg_content" > "$svg_filename"
echo "Created $svg_filename"

# Create PNG file
png_filename="${svg_output_dir}/${slug}.png"
rsvg-convert -w 1024 "$svg_filename" -o "$png_filename"
echo "Created $png_filename"