import express from 'express';

import { API } from "../api";
import { loginApi } from './login_api';

export class ExpressAPI implements API {
    startServer(hostname: string, port: number): void {
        const app = express();
        
        app.use('/login', loginApi);

        app.listen(port, hostname);

        console.log(`Express is listening on port ${port}`);
    }
}