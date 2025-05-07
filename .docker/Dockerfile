# Single-stage image for serving pre-built Vite app
FROM fholzer/nginx-brotli:latest

# Set working directory for nginx config
WORKDIR /etc/nginx

# Add custom Nginx configuration (must listen on port 8080 for Cloud Run)
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the pre-built Vite app (from GitHub Actions build step)
COPY dist /usr/share/nginx/html

# Expose the port expected by Cloud Run
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
