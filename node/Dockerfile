FROM node:18-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["nodemon", "index.js"]
