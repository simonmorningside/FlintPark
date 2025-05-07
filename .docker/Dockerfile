# Use standard nginx with gzip support
FROM nginx:alpine

# Copy custom nginx config that listens on port 8080
WORKDIR /etc/nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copy prebuilt Vite app (will be provided by GitHub Actions)
COPY dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
