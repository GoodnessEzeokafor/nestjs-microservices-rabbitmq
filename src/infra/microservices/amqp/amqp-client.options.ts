import { configService } from 'nest-shared';

export const amqpClientOptions = {
    urls: [configService.getValue('AMQP_URL', true)],
    queue: configService.getValue('AMQP_QUEUE', false),
    queueOptions: {
        durable: false,
    },
};
