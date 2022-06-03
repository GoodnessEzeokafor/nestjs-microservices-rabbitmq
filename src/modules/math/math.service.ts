import { Injectable } from '@nestjs/common';
import { GetNotificationsDto } from './dto/get-notifications.dto';

@Injectable()
export class MathService {
    public getNotifications(getNotificationsDto: GetNotificationsDto): void {
        const { context } = getNotificationsDto;
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();

        channel.ack(originalMsg);
    }
}
