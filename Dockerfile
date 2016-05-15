FROM mhart/alpine-node:6.1.0
MAINTAINER Ross Hendry "rhendry@googlemail.com"

ADD . /opt/apps/orders-service
WORKDIR /opt/apps/orders-service

RUN npm install --production
EXPOSE 8101
CMD ["npm", "start"]
