#!/bin/bash

# Check if output directory exists, if not, create it
output_dir="../_quotes"
if [ ! -d "$output_dir" ]; then
    mkdir "$output_dir"
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
while IFS=, read -r excerpt speaker_name speaker_picture ogImage_url releaseDate content; do
    # Increment index counter
    ((index++))

    # Remove commas from excerpt
    cleaned_excerpt="${excerpt//,/}"

    # Remove double quotes from content
    cleaned_content="${content//\"/}"

    # Generate markdown content
    markdown_content="---
excerpt: \"$cleaned_excerpt\"
speaker:
  name: '$speaker_name'
  picture: '$speaker_picture'
ogImage:
  url: '$ogImage_url'
releaseDate: '$releaseDate'
---

$cleaned_content"

    # Create markdown file
    filename="${output_dir}/${index}.md"
    echo "$markdown_content" > "$filename"
    echo "Created $filename"
done < "$input_csv"

echo "Markdown files created in $output_dir directory."