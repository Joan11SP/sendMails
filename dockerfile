FROM node:16

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./
#COPY .env ./

RUN npm install

COPY src ./

EXPOSE 5001

ENTRYPOINT ["node", "server.js"]
