# Use Node-based static file server
FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve

COPY dist /app

ENV PORT=8080
EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]
