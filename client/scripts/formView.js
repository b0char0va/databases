var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
  
    var userObj = {
      name: App.username
    };
    var link = 'http://127.0.0.1:3000/classes/users';
    
    Parse.create(link, userObj, (id) => {
      // _.extend(userObj, data);
      var messageLink = 'http://127.0.0.1:3000/classes/messages';
      var message = {
        text: FormView.$form.find('#message').val(),
        user_id: id,
        room_id: 1
        // user_id: App.username,
        // room_id: Rooms.selected || 'lobby'
      };

      Parse.create(messageLink, message, (data) => {
        _.extend(message, data);
        message['name'] = App.username;
        Messages.add(message, MessagesView.render);
      });
    });
    
    
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

}; 