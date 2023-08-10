#!/bin/bash

# Check if output directory for quotes exists, if not, create it
output_dir="../_quotes"
if [ ! -d "$output_dir" ]; then
    mkdir "$output_dir"
fi

# Check if output directory for SVG files exists, if not, create it
svg_output_dir="../public/quotes"
if [ ! -d "$svg_output_dir" ]; then
    mkdir "$svg_output_dir"
fi

# Check if input CSV file is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <input_csv_file>"
    exit 1
fi

# Initialize index counter
index=0

# Check if starting index is provided
if [ ! -z "$2" ]; then
    index="$2"
fi

# Read input CSV file
input_csv="$1"

# Loop through each line in the CSV file
while IFS=, read -r excerpt speaker_name speaker_picture releaseDate content; do
    # Increment index counter
    ((index++))

    # Generate random color
    color=$(./random_color.sh)

    # Generate markdown content
    markdown_content=$(./make_md_content.sh "$excerpt" "$speaker_name" "$speaker_picture" "$releaseDate" "$content" "$color")

    # Create markdown file
    filename="${output_dir}/${index}.md"
    echo "$markdown_content" > "$filename"
    echo "Created $filename"

    # Call make_svg_content.sh script to generate SVG content
    svg_content=$(./make_svg_content.sh "$content" "$speaker_name" "$speaker_picture" "$color")

    # Create SVG file
    svg_filename="${svg_output_dir}/${index}.svg"
    echo "$svg_content" > "$svg_filename"
    echo "Created $svg_filename"

    # Create PNG file
    png_filename="${svg_output_dir}/${index}.png"
    rsvg-convert -w 1024 "$svg_filename" -o "$png_filename"
    echo "Created $png_filename"
done < "$input_csv"

echo "Markdown files created in $output_dir directory."