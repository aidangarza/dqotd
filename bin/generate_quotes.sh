#!/bin/bash

# Check if input CSV file is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <input_csv_file>"
    exit 1
fi

# Initialize slug counter
slug=0

# Check if starting slug is provided
if [ ! -z "$2" ]; then
    slug="$2"
fi

# Read input CSV file
input_csv="$1"

# Loop through each line in the CSV file
while IFS=, read -r excerpt speaker_name speaker_picture releaseDate content; do
    # Increment slug counter
    ((slug++))

    # Generate random color
    color=$(./random_color.sh)

    # Generate .md file
    ./generate_md.sh "$slug" "$excerpt" "$speaker_name" "$speaker_picture" "$releaseDate" "$content" "$color"

    # Create .svg and .png images
    ./generate_images.sh "$slug" "$content" "$speaker_name" "$speaker_picture" "$color"
done < "$input_csv"

echo "Created $slug quotes"