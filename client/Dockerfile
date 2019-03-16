FROM node:lts-alpine as developmemnt

WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD   ["yarn", "dev"]
EXPOSE 3000