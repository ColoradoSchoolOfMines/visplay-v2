import express from 'express';
import { API } from "../api";
import { loginApi } from './login_api';
import cors from 'cors';

export class ExpressAPI implements API {
    startServer(hostname: string, port: number): void {
        const app = express();
        
        app.use(cors());
        app.use('/login', loginApi);

        app.listen(port, hostname);

        console.log(`Express is listening on port ${port}`);
    }
}