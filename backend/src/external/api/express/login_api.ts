import router from 'express';

const loginApi = router();

loginApi.post('/', async(req, res) => {
    var body = {'name': req.body.username, 'test': 'user'};
    console.log(req.body);
    res.json(body);
});

export { loginApi };