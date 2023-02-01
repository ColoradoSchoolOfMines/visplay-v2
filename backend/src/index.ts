import { setupDI } from 'di';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';

import { DBConnectionError } from './core/errors/errors';

const main = async () => {
    console.log('Starting Backend Server...');

    setupDI();
    // Read database keys from env variable
    dotenv.config();
}

main().catch(err => console.log(err));
