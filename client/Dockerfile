FROM node:lts-alpine

WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD   ["yarn", "start"]
EXPOSE 3000