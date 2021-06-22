FROM node:alpine

WORKDIR /var/www/html

COPY ./www/package.json ./
COPY ./www/package-lock.json ./

RUN npm install