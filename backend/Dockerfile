FROM node:18

WORKDIR /app

# Copy package files first
COPY package*.json ./

RUN npm install

# Copy remaining files
COPY . .

# Expose backend port
EXPOSE 5000

CMD ["node", "server.js"]