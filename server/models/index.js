// after db 
var db = require('../db');
var Promise = require('bluebird');

console.log({db});
module.exports = {
  messages: {
    get: function (req, res) {
      db.query('select * from employee', function (error, results, fields) {
        if (error) { throw error; }
        res.end(JSON.stringify(results));
      });
    },
     
    post: function (req, res) {
      var postData = req.body;
      db.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
        if (error) { throw error; }
        res.end(JSON.stringify(results));
      });
      
      
      
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

