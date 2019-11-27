FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY package*.json /app/

ENV PORT 8080
ENV HOST 0.0.0.0

EXPOSE 8080

RUN npm install

COPY ./ /app/

ARG configuration=production


CMD ["npm", "run", "start"]

