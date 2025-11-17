#!/bin/bash

# Script to update all external image references to local paths
echo "Updating image references in all files..."

# Function to replace URL with local path
replace_image_url() {
    local url="$1"
    local filename=$(basename "$url")
    
    # Handle special cases
    if [[ "$filename" == "js?id=GA_MEASUREMENT_ID" ]]; then
        # Skip Google Analytics script
        return
    fi
    
    # If no extension, add .png as default
    if [[ "$filename" != *"."* ]]; then
        filename="${filename}.png"
    fi
    
    local local_path="/images/$filename"
    
    echo "Replacing: $url -> $local_path"
    
    # Replace in all TypeScript/TSX files
    find src/app -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s|$url|$local_path|g"
}

# Read each URL and replace
while IFS= read -r url; do
    if [ -n "$url" ]; then
        replace_image_url "$url"
    fi
done < /tmp/external_images.txt

echo "Image reference updates complete!"
