[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hebertcisco/nestjs-microservices-rabbitmq)

[![Node.js CI](https://github.com/hebertcisco/nestjs-microservices-rabbitmq/actions/workflows/node.js.yml/badge.svg)](https://github.com/hebertcisco/nestjs-microservices-rabbitmq/actions/workflows/node.js.yml)

[![Docker Image CI](https://github.com/hebertcisco/nestjs-microservices-rabbitmq/actions/workflows/docker-image.yml/badge.svg)](https://github.com/hebertcisco/nestjs-microservices-rabbitmq/actions/workflows/docker-image.yml)

RabbitMQ is an open-source and lightweight message broker which supports multiple messaging protocols.

# Basic documentation

## rabbitmq with Docker

> Up an image and run rabbitmq image with docker

```sh
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.10-management
```

## Environment variables

> Create a `.env` file in the root directory of your project

```dotenv
# APP CONFIGURATION
PORT=3333              # default port to listen
NODE_ENV="development" #development or production

# RABBITMQ CONFIGURATION
AMQP_HOST=localhost                                    # rabbitmq host
AMQP_PORT=1883                                         # rabbitmq port
AMQP_USER=A134A5:A134A5                                # rabbitmq user
AMQP_PASSWORD=5TR0ng-p4sSwd                            # rabbitmq password
AMQP_URL=amqps://A134A5:5TR0ng-p4sSwd@localhost/A134A5 # rabbitmq url
AMQP_QUEUE=example_queue                               # rabbitmq queue
AMQP_VHOST=A134A5                                      # rabbitmq vhost

```

## Runing the application with docker

### Run as dev

```sh
docker-compose up dev
```

### Run as prod

```sh
docker-compose up -d prod
```

## Runing the application with npm scrips

```sh
npm install && npm run build
```

```sh
npm run prepare:enviroment
```

### Run as dev

```sh
npm run dev
```

or

```sh
npm run dev:test
```

### Run as prod

```sh
npm run start
```

or

```sh
npm run start:prod
```
