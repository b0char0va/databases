var controller = require('./controllers');
var router = require('express').Router();

// router.use(function(req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type: application/json,  Content-Type: application/x-www-form-urlencoded, Accept");
//   next();
// }); 

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;


// Content-Type: application/json Content-Type: application/x-www-form-urlencoded
