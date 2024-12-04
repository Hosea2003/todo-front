FROM node:18-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app/

EXPOSE 5998

CMD yarn dev