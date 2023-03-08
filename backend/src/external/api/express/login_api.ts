import router from 'express';
import { BCryptHasher } from '../../hashing/sha256_hasher';
import { MongoClient } from 'mongodb';
import { getDBConnectionString } from '../../../external/db/mongoose/mongoose_db';
import jwt from 'jsonwebtoken';

const loginApi = router();

loginApi.post('/login', async(req, res) => {
    var password = req.body.password;
    var username = req.body.username;

    //console.log(getDBConnectionString());

    const client = new MongoClient(getDBConnectionString());

    const db = client.db('visplay');
    const users = db.collection('users');

    var user = await users.findOne({
        'username': req.body.username
    })

    if(user != null) {
        var hasher = new BCryptHasher;
        var hashedPass = await hasher.hash_with_salt(password, user.salt);

        const key = 'foo';

        if(hashedPass.hashedString == user.password) {
            const token = jwt.sign({'user': username}, key);

            res.json(token);
        } else {
            res.json({error: 2, 'hashedPass': hashedPass});
        }
        
    } else {
        res.json({error: 1});   
    }
    
});


loginApi.post('/signup', async(req, res) => {
    var password = req.body.password;
    var username = req.body.username;

    var hasher = new BCryptHasher;
    var hashedPass = await hasher.hash(password);

    console.log(getDBConnectionString());

    const client = new MongoClient(getDBConnectionString());

    const db = client.db('visplay');
    const users = db.collection('users');

    var user = await users.findOne({
        'username': req.body.username
    })

    if(user == null) {
        users.insertOne({
            'username': req.body.username,
            'password': hashedPass.hashedString,
            'salt': hashedPass.salt
        })

        const key = 'foo';

        const token = jwt.sign({'user': username}, key);

        res.json(token);
    } else {
        res.json({error: 1});   
    }
});


export { loginApi };