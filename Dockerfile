############### SSG BUILD ###############

# FROM node:16.12.0-alpine as builder
FROM node:16.12.0-alpine

# install nodemodules
# COPY ./package.json ./
# COPY ./yarn.lock ./
# COPY ./* ./
# RUN yarn install --frozen-lockfile
# COPY ./src/ ./


# RUN yarn build && yarn install --production --ignore-scripts --prefer-offline
# RUN ls -a
# RUN yarn export

RUN mkdir -p /work
WORKDIR /work
COPY package.json /work
COPY yarn.lock /work
RUN yarn install --frozen-lockfile && yarn cache clean
COPY . /work
# RUN ls -a
# RUN yarn build

# start server
EXPOSE 3000
# ENTRYPOINT yarn start
ENTRYPOINT yarn prod:server


############### Nginx ###############

# FROM nginx:latest
# COPY --from=builder ./work/out /usr/share/nginx/html
# EXPOSE 80

###################################