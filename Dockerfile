FROM node:4.3.2

COPY ./app.js ./package.json ./
RUN npm install
CMD node ./app.js

EXPOSE 3000