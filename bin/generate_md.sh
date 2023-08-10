#!/bin/bash

# Check if output directory for quotes exists, if not, create it
output_dir="../_quotes"
if [ ! -d "$output_dir" ]; then
    mkdir "$output_dir"
fi

slug="$1"
excerpt="$2"
speaker_name="$3"
speaker_picture="$4"
releaseDate="$5"
content="$6"
color="${7:-#ff8800}"  # Default color is #ff8800 if not provided

# Generate markdown content
markdown_content=$(./make_md_content.sh "$excerpt" "$speaker_name" "$speaker_picture" "$releaseDate" "$content" "$color")

# Create markdown file
filename="${output_dir}/${slug}.md"
echo "$markdown_content" > "$filename"
echo "Created $filename"