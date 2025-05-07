# Build Stage
FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve Stage
FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve

# Copy static build from previous stage
COPY --from=build /app/dist .

# Cloud Run expects the server to listen on $PORT
ENV PORT 8080
EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]
