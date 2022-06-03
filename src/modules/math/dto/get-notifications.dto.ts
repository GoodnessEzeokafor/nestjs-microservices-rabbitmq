import type { RmqContext } from '@nestjs/microservices';

export class GetNotificationsDto {
    data: number[];
    context: RmqContext;
}
