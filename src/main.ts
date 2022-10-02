#!/usr/bin/env node
import 'reflect-metadata';

import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { amqpClientOptions } from './infra/microservices/amqp/amqp-client.options';
import { PORT } from './shared/constants/global';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.RMQ,
            options: { ...amqpClientOptions },
        },
    );
    await app.listen();
}

((): void => {
    bootstrap()
        .then(() => process.stdout.write(`Listening on port ${PORT}...\n`))
        .catch((err) => {
            process.stderr.write(`Error: ${err.message}\n`);
            process.exit(1);
        });
})();
