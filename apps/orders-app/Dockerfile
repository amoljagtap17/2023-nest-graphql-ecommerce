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

# Copy the prisma directory
COPY ./prisma ./prisma

# Install dependencies and generate Prisma Client
RUN npm install && npx prisma generate

# Bundle app source
COPY ./apps/orders-app ./apps/orders-app

# If tsconfig.json is in the root of your monorepo and you're building an app from a sub-directory
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./nest-cli.json ./nest-cli.json

# Map the libs directory since the apps might depend on it
COPY ./libs ./libs

#PROD MIDDLE STEP
FROM builder as prod-build

RUN npm run build orders-app

#PROD
ENV NODE_ENV=production

ENTRYPOINT ["node", "./main.js"]

WORKDIR /usr/src/app/dist/apps/orders-app

CMD [""]

USER node

EXPOSE 3000
