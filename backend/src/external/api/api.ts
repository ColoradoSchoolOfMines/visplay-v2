import { APIConfig } from '../../core/entities/api_config';

export interface API {
    startServer(hostname: string, port: number): void;
}