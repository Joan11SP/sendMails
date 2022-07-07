FROM node:14

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY src ./

EXPOSE 5001

ENTRYPOINT ["node", "server.js"]
