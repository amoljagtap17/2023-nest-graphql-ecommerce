ARG IMAGE=node:18.17-alpine

FROM $IMAGE as builder

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY ./package*.json ./

COPY ./prisma ./prisma

RUN npm install && npx prisma generate

COPY ./apps/products-app ./apps/products-app

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./nest-cli.json ./nest-cli.json

COPY ./libs ./libs

FROM builder as prod-build

RUN npm run build products-app

ENV NODE_ENV=production

ENTRYPOINT ["node", "./main.js"]

WORKDIR /usr/src/app/dist/apps/products-app

CMD [""]

USER node

EXPOSE 3000
