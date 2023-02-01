import "reflect-metadata";

import { container } from "tsyringe";

import { API } from './external/api/api';
import { ExpressAPI } from './external/api/express/express_api';
import { DB }  from './external/db/db';
import { MongooseDB }  from './external/db/mongoose/mongoose_db';

export const setupDI = () => {
    container.register<DB>("DB", { useValue: new MongooseDB() });

    container.register<API>("API", { useValue: new ExpressAPI() });
}