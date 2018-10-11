// after db 
var db = require('../db');


// console.log({db});
module.exports = {
  messages: {
    get: function (req, res) {
      
      db.getConnection().query('select * from messages', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
      // const q = 'SELECT * FROM messages'
      // db.getConnection().query(q, [req.params.id], function(error, results, fields) {
      //   console.log('inside message get', {results})
      //   console.log('inside message get', {fields})
      // })
    },

    post: function (req, res) {
      var postData = req.body;
      console.log({postData});
      db.getConnection().query('INSERT INTO messages SET ?', postData, function (error, results, fields) {
        if (error) { throw error; }
        res.end(JSON.stringify(results));
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.getConnection().query('select * from users', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      var postData = req.body;
      db.getConnection().query('INSERT INTO users SET ?', postData, function (error, results, fields) {
        if (error) { throw error; }
        res.end(JSON.stringify(results));
      });
    }
  }
};

//command to add user (post user) both headers are very important and order is important
//curl -XPOST -H  "Content-Type: application/json" -H "Content-Type: application/x-www-form-urlencoded" localhost:3000/classes/users -d '{"name": "mona"}'
// curl -XPOST -H  "Content-Type: application/json" -H "Content-Type: application/x-www-form-urlencoded" localhost:3000/classes/messages -d '{"text": "hi", "user_id": "1", "room_id": "1"}'
// curl -XPOST localhost:3000/classes/messages -d '{"text": "hello", "user_id": "1", "room_id": "1"}'
