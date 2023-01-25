import router from 'express';
import mongodb, { MongoClient } from 'mongodb';

const loginApi = router();

loginApi.get('/', async(req, res) => {
    const url = 'mongodb+srv://jarchibold:BzWeSZG0b89JJpEX@cluster0.ovrf7th.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db("visplay");
    res.send(await db.collection("users").find({}).toArray());
});

export default loginApi;