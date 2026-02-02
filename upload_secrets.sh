#!/bin/bash

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Error: .env file not found"
    exit 1
fi

echo "Uploading secrets from .env to Cloudflare..."

# Read .env file line by line
while IFS='=' read -r key value; do
    # Skip comments and empty lines
    if [[ $key =~ ^#.* ]] || [[ -z $key ]]; then
        continue
    fi
    
    # Trim whitespace
    key=$(echo $key | xargs)
    value=$(echo $value | xargs)
    
    # Skip if value is empty
    if [[ -z $value ]]; then
        continue
    fi
    
    echo "Uploading $key..."
    # Use npx wrangler secret put strictly, reading from stdin to avoid interactive prompt
    echo "$value" | npx wrangler secret put "$key"
done < .env

echo "Done! Secrets uploaded."
