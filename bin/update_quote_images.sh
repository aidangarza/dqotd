#!/bin/bash

# Check if slug is provided as an argument
if [ -z "$1" ]; then
    echo "Usage: $0 <slug>"
    exit 1
fi

slug="$1"
md_file="../_quotes/${slug}.md"

# Check if the markdown file exists
if [ ! -f "$md_file" ]; then
    echo "Markdown file '$md_file' not found."
    exit 1
fi

# Extract required inputs from the markdown file
content=$(sed -n '/^---$/,/^---$/!p' "$md_file")
speaker_name=$(grep "name:" "$md_file" | sed -e "s/name://; s/'//g; s/^[[:space:]]*//; s/[[:space:]]*$//")
speaker_picture=$(grep "picture:" "$md_file" | sed -e "s/picture://; s/'//g; s/^[[:space:]]*//; s/[[:space:]]*$//")
color=$(grep "color:" "$md_file" | sed -e "s/color://; s/'//g; s/^[[:space:]]*//; s/[[:space:]]*$//")

# Run generate_images.sh with extracted inputs
./generate_images.sh "$slug" "$content" "$speaker_name" "$speaker_picture" "$color"

echo "Images for quote '$slug' have been updated."
