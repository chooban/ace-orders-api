FROM mhart/alpine-node:6.10.0
MAINTAINER Ross Hendry "rhendry@googlemail.com"

ARG env=production
ENV NODE_ENV ${env}
ADD . /opt/apps/orders-service
WORKDIR /opt/apps/orders-service

RUN npm install && npm cache clean
EXPOSE 8101
CMD ["npm", "start"]
