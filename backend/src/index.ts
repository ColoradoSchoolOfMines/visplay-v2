import express from 'express';
import mongoose from 'mongoose';

import loginApi from './features/login/api';

const main = async () => {
    // Connect to the database using the ENV file.
    //await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.ovrf7th.mongodb.net/?retryWrites=true&w=majority'); // TODO: Add actual database path.

    // Setup API for 
    const app = express();
    app.use(loginApi);

    app.listen(8080);
}

main().catch(err => console.log(err));