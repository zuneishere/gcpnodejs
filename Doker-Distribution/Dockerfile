FROM node:12

LABEL Maintainer="Dennis"
LABEL MAINTAINER.EMAIL="dennis@admod.com"
LABEL IMAGE="gcr.io/buoyant-genre-251705/amnodejs:4.0"

WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node", "server.js" ]
