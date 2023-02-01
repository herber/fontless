FROM node:16-alpine3.16 as builder

COPY . /src

WORKDIR /src

RUN npm install

RUN cd setup && npm run build && npm run do-setup

FROM node:16-alpine3.16

WORKDIR /app

COPY --from=builder /src/setup/deployment.zip ./

RUN unzip deployment.zip -o && npm install && npm run build

