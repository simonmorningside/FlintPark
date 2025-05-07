# Stage 1: Build Vite app
FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm install

# Stage 2: Serve static site
FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist .

ENV PORT=8080
EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]
