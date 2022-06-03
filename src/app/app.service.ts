import { Injectable } from '@nestjs/common';
type TInfo = {
    name: string;
    version: string;
    creator: string;
    status: string;
};
@Injectable()
export class AppService {
    info(): TInfo {
        return {
            name: 'nestjs-microservices-rabbitmq',
            version: '0.0.1',
            creator: 'Hebert Barros <hebert@hotbrains.com.br>',
            status: 'online',
        };
    }
}
