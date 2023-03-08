import * as dotenv from 'dotenv'

import { setupDI } from './di';
import { ExpressAPI } from './external/api/express/express_api';

const main = async () => {
    console.log('Starting Backend Server...');

    setupDI();
    // Read database keys from env variable
    dotenv.config();

    const server = new ExpressAPI();
    server.startServer("0.0.0.0", 8080);
    
}

main().catch(err => console.log(err));
