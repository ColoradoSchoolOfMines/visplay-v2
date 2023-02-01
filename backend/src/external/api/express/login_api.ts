import router from 'express';

const loginApi = router();

loginApi.get('/', async(req, res) => {
    // const url = 'mongodb+srv://<username>:<password>@cluster0.ovrf7th.mongodb.net/?retryWrites=true&w=majority';
    // const client = new MongoClient(url);
    // await client.connect();
    // const db = client.db("visplay");
    // res.send(await db.collection("users").find({}).toArray());
    res.send("Hello!");
});

export { loginApi };