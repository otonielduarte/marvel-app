FROM node:12 as base
WORKDIR /app/
COPY [ "package*.json", "yarn.lock", "/app/" ]

FROM base as install
WORKDIR /app/
RUN yarn

FROM base as build
ENV NODE_ENV=production
WORKDIR /app/
RUN yarn --prod
RUN yarn build
