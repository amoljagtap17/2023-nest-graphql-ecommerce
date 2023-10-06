# Base image
ARG IMAGE=node:18.17-alpine

FROM $IMAGE as builder

# Create a directory for our app
WORKDIR /usr/src/app

# Install global packages
RUN npm install -g @nestjs/cli

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY ./apps/gateway ./apps/gateway

# If tsconfig.json is in the root of your monorepo and you're building an app from a sub-directory
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./nest-cli.json ./nest-cli.json

#PROD MIDDLE STEP
FROM builder as prod-build

RUN npm run build gateway

#PROD
ENV NODE_ENV=production

ENTRYPOINT ["node", "./main.js"]

WORKDIR /usr/src/app/dist/apps/gateway

CMD [""]

USER node

EXPOSE 3000
