FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY app.js ./
EXPOSE 8080
CMD ["node", "app.js"]
