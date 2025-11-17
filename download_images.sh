#!/bin/bash

# Script to download all external images and update code references
echo "Starting image download process..."

# Create directories for different image types
mkdir -p public/images/commercial
mkdir -p public/images/residential
mkdir -p public/images/industrial
mkdir -p public/images/exterior
mkdir -p public/images/interior
mkdir -p public/images/condo
mkdir -p public/images/epoxy

# Counter for downloaded images
downloaded=0
failed=0

# Read each URL and download
while IFS= read -r url; do
    if [ -n "$url" ]; then
        # Extract filename from URL
        filename=$(basename "$url")
        
        # If no extension, try to determine from URL
        if [[ "$filename" == *"."* ]]; then
            # Has extension
            local_path="public/images/$filename"
        else
            # No extension, add .png as default
            local_path="public/images/${filename}.png"
        fi
        
        echo "Downloading: $filename"
        
        # Download the image
        if curl -s -o "$local_path" "$url"; then
            echo "✓ Downloaded: $filename"
            ((downloaded++))
        else
            echo "✗ Failed: $filename"
            ((failed++))
        fi
    fi
done < /tmp/external_images.txt

echo "Download complete!"
echo "Successfully downloaded: $downloaded images"
echo "Failed downloads: $failed images"
