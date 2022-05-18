FROM node:14.16.1-stretch-slim

COPY . /app

WORKDIR /app

RUN chown -R node:node /app
USER node
RUN npm install
RUN npm install https://github.com/spaceraccoon/npm-scan.git
RUN npx npm-scan


ENTRYPOINT ["npm", "run", "start"]
