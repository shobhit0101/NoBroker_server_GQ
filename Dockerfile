FROM node:alpine

WORKDIR /usr/src/app
COPY package.json .
RUN npm install --force
Expose 4000
CMD ["npm","start"]