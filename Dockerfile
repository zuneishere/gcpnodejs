FROM node:12
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)s
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node", "server.js" ]
