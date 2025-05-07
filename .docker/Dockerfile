# Use prebuilt Nginx with Brotli
FROM fholzer/nginx-brotli:v1.26.2

# Set working directory for Nginx config
WORKDIR /etc/nginx

# Use your custom Nginx config (make sure it's present in `.docker/nginx.conf`)
ADD nginx.conf /etc/nginx/nginx.conf

# Copy React build from GitHub Actions artifact
COPY dist /usr/share/nginx/html

# Expose port for Cloud Run
EXPOSE 8080

# Start Nginx in foreground for Cloud Run compatibility
CMD ["nginx", "-g", "daemon off;"]
