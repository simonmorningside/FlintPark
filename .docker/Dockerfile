# Stage 1: Build the Vite app
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install

# Stage 2: Serve with Brotli-enabled Nginx
FROM fholzer/nginx-brotli:latest
WORKDIR /etc/nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
