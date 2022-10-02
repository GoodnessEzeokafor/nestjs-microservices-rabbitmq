import { configService } from 'nest-shared';

export const PORT = configService.getPort() || 3000;
export const APP_SECRET: string = process.env.APP_SECRET;
