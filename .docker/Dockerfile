# Stage 1: Build the Vite app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Stage 2: Serve the app with Nginx and Brotli support
FROM fholzer/nginx-brotli:v1.12.2

# Set the working directory to Nginx config directory
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

# Copy the built Vite app from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080 (or 80 if desired)
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
