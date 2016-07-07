FROM node:4.4.7

COPY ./app.js ./package.json ./
RUN npm install
CMD node ./app.js

EXPOSE 3000
