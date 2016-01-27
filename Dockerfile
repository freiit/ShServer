FROM node:4.2.6

COPY ./app.js ./package.json ./
RUN npm install
CMD node ./app.js

EXPOSE 3000