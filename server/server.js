Email = new Meteor.Collection("email");

Meteor.methods({
  store_email: function (email) {
    console.log(email);
    Email.insert({email: email, date_created: new Date()});
  }
});