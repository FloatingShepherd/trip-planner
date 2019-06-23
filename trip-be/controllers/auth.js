const _ = require('lodash');

const users = [{
    id: '123',
    password: '123'
}, {
    id: '321',
    password: '321'
}]

async function auth(req, res) {
    const userId=_.get(req.body, 'userId');
    const password=_.get(req.body, 'password');

    return await users.filter((user) => user.id===userId && user.password === password).length === 1;
}

module.exports = {
    auth
}