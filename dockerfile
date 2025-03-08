# Use an official Node.js runtime as a parent image
FROM node:18-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]