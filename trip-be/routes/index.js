var express = require('express');
var router = express.Router();
const auth = require('../controllers/auth').auth;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.post('/auth', async function(req, res, next) {
  res.send(await auth(req));
});

/* GET home page. */
router.get('/trip/:userId', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
