import 'reflect-metadata';

import dotenv from 'dotenv';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { amqpClientOptions } from './amqp-client.options';
import { PORT } from './shared/constants/global';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.connectMicroservice<MicroserviceOptions>(amqpClientOptions);

    await app.listen(PORT);
}

((): void => {
    bootstrap()
        .then(() => process.stdout.write(`Listening on port ${PORT}...\n`))
        .catch((err) => {
            process.stderr.write(`Error: ${err.message}\n`);
            process.exit(1);
        });
})();
