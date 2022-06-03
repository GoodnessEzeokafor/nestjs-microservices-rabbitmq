import { ClientOptions, Transport } from '@nestjs/microservices';
import { configService } from './infra/application/application.config';

export const amqpClientOptions: ClientOptions = {
    transport: Transport.RMQ,
    options: {
        urls: [configService.getValue('AMQP_URL', true)],
        queue: configService.getValue('AMQP_QUEUE', false),
        queueOptions: {
            durable: false,
        },
    },
};
