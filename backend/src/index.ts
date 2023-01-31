import * as dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';

import { DBConnectionError } from './core/errors/errors';
import loginApi from './features/login/api';

const main = async () => {
    console.log('Starting Backend Server...');

    // Read database keys from env variable
    dotenv.config();

    const connString = getDBConnectionString();
    await mongoose.connect(connString);

    // Setup API for 
    const app = express();
    app.use(loginApi);

    app.listen(8080);
}

const getDBConnectionString = () => {
    const username = process.env.USERNAME;
    const password= process.env.PASSWORD;
    const url = process.env.MONGO_URL; // cluster0.ovrf7th.mongodb.net

    if (!username || !password || !url) {
        throw new DBConnectionError('Your environment doesn\'t seem to contain the required variables.');
    }

    const connectionString = `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority`;

    return connectionString;
};

main().catch(err => console.log(err));
