// after db 
var db = require('../db');


console.log({db});
module.exports = {
  messages: {
    get: function (req, res) {
      var postData = req.body;
      console.log(postData);
      db.getConnection().query('INSERT INTO messages SET ?', postData, function (error, results, fields) {
        if (error) { throw error; }
        res.end(JSON.stringify(results));
      });
    },

    post: function (req, res) {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {
      var postData = req.body;
      console.log(postData);
      db.getConnection().query('INSERT INTO users SET ?', postData, function (error, results, fields) {
        if (error) { throw error; }
        res.end(JSON.stringify(results));
      });
    }
  }
};

//command to add user (post user) both headers are very important and order is important
//curl -XPOST -H  "Content-Type: application/json" -H "Content-Type: application/x-www-form-urlencoded" localhost:3000/classes/users -d '{"name": "mona"}'

