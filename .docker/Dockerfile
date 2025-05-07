# Serve pre-built Vite app using serve
FROM node:18-alpine

WORKDIR /app
RUN npm install -g serve

# dist/ will be copied here by GitHub Actions
COPY dist /app

ENV PORT=8080
EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]
