import express from 'express';
import { API } from "../api";
import { loginApi } from './login_api';
import cors from 'cors';
import bodyParser from 'body-parser';

export class ExpressAPI implements API {
    startServer(hostname: string, port: number): void {
        const app = express();
        
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use('/login', loginApi);

        app.listen(port, hostname);

        console.log(`Express is listening on port ${port}`);
    }
}