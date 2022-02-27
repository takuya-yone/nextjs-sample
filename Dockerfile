############### SSG BUILD ###############

# FROM node:17.6.0-alpine as builder
FROM node:17.6.0-alpine


RUN mkdir -p /work
WORKDIR /work
COPY . /work

RUN yarn install --frozen-lockfile && yarn cache clean
# start server
EXPOSE 3000
# ENTRYPOINT yarn start
ENTRYPOINT yarn prod:server


############### Nginx ###############

# FROM nginx:latest
# COPY --from=builder ./work/out /usr/share/nginx/html
# EXPOSE 80

###################################