FROM node:10.15.1

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
    then \
    npm install -g http-server && \
    npm run build && \
    cd dist && \
    hs -p 3000; \
    else \
    npm run start; \
    fi