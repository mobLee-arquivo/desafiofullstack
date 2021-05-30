FROM node:13.12.0-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package*.json app

COPY . .

RUN npm install

EXPOSE 5000

CMD npm run start