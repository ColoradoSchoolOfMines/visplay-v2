import router from 'express';
import { BCryptHasher } from '../../hashing/sha256_hasher';

import { MongoClient } from 'mongodb';
import { getDBConnectionString } from '../../../external/db/mongoose/mongoose_db';

const loginApi = router();

loginApi.post('/', async(req, res) => {
    var password = req.body.password;
    var username = req.body.username;

    var hasher = new BCryptHasher;
    var hashedPass = await hasher.hash(password);

    console.log(getDBConnectionString());

    const client = new MongoClient(getDBConnectionString());

    const db = client.db('visplay');
    const users = db.collection('users');

    users.findOne({
        'username': req.body.username,
        'password': hashedPass.hashedString,
        'salt': hashedPass.salt
    })

    res.json({'username': username, 'hashedPassword': hashedPass});
});

export { loginApi };