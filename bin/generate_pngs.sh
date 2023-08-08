#!/bin/bash

# Directory containing the SVG files
svg_directory="../public/quotes"

# Loop through SVG files in the directory
for svg_file in "$svg_directory"/*.svg; do
  if [ -f "$svg_file" ]; then
    base_name=$(basename "$svg_file")
    png_file="$svg_directory/${base_name%.svg}.png"

    # Convert SVG to PNG using rsvg-convert
    rsvg-convert -w 1024 "$svg_file" -o "$png_file"

    if [ $? -eq 0 ]; then
      echo "Converted $svg_file to $png_file"
    else
      echo "Error converting $svg_file to PNG"
    fi
  fi
done
