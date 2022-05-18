FROM node:14.16.1-stretch-slim

COPY . /app

WORKDIR /app

RUN chown -R node:node /app
USER node
RUN npm install
RUN npm run scan


ENTRYPOINT ["npm", "run", "start"]
