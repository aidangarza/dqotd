#!/bin/bash

# Directory containing the SVG files
svg_directory="./path/to/svg/files"

# Loop through SVG files in the directory
for svg_file in "$svg_directory"/*.svg; do
  base_name=$(basename "$svg_file")
  png_file="$base_name.png"

  # Convert SVG to PNG using rsvg-convert
  rsvg-convert -w 1024 "$svg_file" -o "$png_file"

  if [ $? -eq 0 ]; then
    echo "Converted $svg_file to $png_file"
  else
    echo "Error converting $svg_file to PNG"
  fi
done