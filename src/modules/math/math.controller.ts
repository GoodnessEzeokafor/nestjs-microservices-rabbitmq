import { Controller } from '@nestjs/common';
import {
    Ctx,
    MessagePattern,
    Payload,
    RmqContext,
} from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class MathController {
    constructor(private readonly mathService: MathService) {}

    @MessagePattern('notifications')
    getNotifications(
        @Payload() data: number[],
        @Ctx() context: RmqContext,
    ): void {
        return this.mathService.getNotifications({
            data: data,
            context: context,
        });
    }
}
