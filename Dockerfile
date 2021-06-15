FROM node:alpine

WORKDIR /var/www/html

COPY ./www/package*.json ./
RUN npm install