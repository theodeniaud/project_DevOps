FROM node:14.16.1-stretch-slim

COPY . /app

WORKDIR /app

RUN npm install
RUN npm run test

ENTRYPOINT ["npm", "run", "start"]
