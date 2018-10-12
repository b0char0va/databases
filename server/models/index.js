// after db 
var db = require('../db');

// console.log({db});

  // get: function (callback) {
  //     // fetch all messages
  //     // text, username, roomname, id
     
  //     db.query(queryStr, function(err, results) {
  //       callback(err, results);
  //     });
  //   },
    
    
    
module.exports = {
 
  messages: {
    get: function (req, res) {
       var queryStr = 'select messages.id, messages.text, users.name \
                      from messages left outer join users on (messages.user_id = users.id) \
                      order by messages.id desc';
      db.getConnection().query(queryStr, function (error, results, fields) {
        if (error) { throw error; }
        // console.log({results})
        res.end(JSON.stringify(results));
      });
    },
    
    post: function (req, res) {
      var postData = req.body;
      // console.log({postData});
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
        if (error) { throw error; }
        console.log({results})
        res.end(JSON.stringify(results));
      });
    },
    
    post: function (req, res) {
      var postData = req.body;
      var name = JSON.stringify(postData.name);
      db.getConnection().query(`SELECT id from users WHERE name = ${name}`, function (error, results, fields) {
    
        if (!results.length) {
          db.getConnection().query('INSERT INTO users SET ?', postData, function (error, results, fields) {
            if (error) { throw error; }
            db.getConnection().query(`SELECT id from users WHERE name = ${name}`, function (error, results, fields) {
              res.end(JSON.stringify(results[0].id));
            });
          });
        } else {
          res.end(JSON.stringify(results[0].id));
        }
      });
    }
  }
};

//command to add user (post user) both headers are very important and order is important
//curl -XPOST -H  "Content-Type: application/json" -H "Content-Type: application/x-www-form-urlencoded" localhost:3000/classes/users -d '{"name": "mona"}'
// curl -XPOST -H  "Content-Type: application/json" -H "Content-Type: application/x-www-form-urlencoded" localhost:3000/classes/messages -d '{"text": "hi", "user_id": "1", "room_id": "1"}'
// curl -XPOST localhost:3000/classes/messages -d '{"text": "hello", "user_id": "1", "room_id": "1"}'
