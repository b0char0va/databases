var Messages = {


  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('created_at');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.id] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    // works here
    // console.log(messages);
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      // works here
      // console.log(message);
      // console.log(message.id);
      // console.log('MESSAGES DATA', Messages._data)
      Messages._data[message.id] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    // ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.user_id = message.user_id || '';
    message.room_id = message.room_id || '';
    return message;
  }
  
};