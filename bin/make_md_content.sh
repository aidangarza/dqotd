#!/bin/bash

excerpt="$1"
speaker_name="$2"
speaker_picture="$3"
releaseDate="$4"
content="$5"
color="$6"

# Remove commas from excerpt
cleaned_excerpt="${excerpt//,/}"

# Remove double quotes from content
cleaned_content="${content//\"/}"

# Generate markdown content
cat << EOF
---
excerpt: \"$cleaned_excerpt\"
speaker:
  name: '$speaker_name'
  picture: '$speaker_picture'
color: '$color'
releaseDate: '$releaseDate'
---
$cleaned_content
EOF