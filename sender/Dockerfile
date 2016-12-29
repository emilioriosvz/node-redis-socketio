FROM node

RUN mkdir -p /opt/src
WORKDIR /opt/src

ADD package.json /opt/src/package.json

RUN npm install

CMD ["node", "sender.js"]
