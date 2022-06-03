import dotenv from 'dotenv';
import { configService } from '../../infra/application/application.config';

dotenv.config();

export const PORT = configService.getPort() || 3000;
export const APP_SECRET: string = process.env.APP_SECRET;
