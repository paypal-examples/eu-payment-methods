FROM node:14

LABEL vendor="eu payment methods"

ADD . /

ARG CLIENT_ID
ARG CLIENT_SECRET

ENV CLIENT_ID=$CLIENT_ID
ENV CLIENT_SECRET=$CLIENT_SECRET

RUN npm install --ignore-scripts

CMD node server/index.js

