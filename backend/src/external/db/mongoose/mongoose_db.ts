import { DBConnectionError } from "core/errors/db_connection_error";
import mongoose from "mongoose";

import { DB } from "../db";

const getDBConnectionString = () => {
    const username = process.env.USERNAME;
    const password= process.env.PASSWORD;
    const url = process.env.MONGO_URL;

    if (!username || !password || !url) {
        throw new DBConnectionError('Your environment doesn\'t seem to contain the required variables.');
    }

    return `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority`;
};

export class MongooseDB implements DB {
    async initialize() {
        // Generate connections string from those keys
        const connString = getDBConnectionString();
        // Use those keys to connect to the DB.
        await mongoose.connect(connString);
    }
}