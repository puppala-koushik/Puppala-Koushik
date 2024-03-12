FROM node:lts-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./

USER root

RUN chown -R app:app .

USER app

RUN yarn set version stable

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

RUN yarn cache clean

CMD ["yarn", "dev"]
