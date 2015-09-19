if (Meteor.isClient) {
  Template.introduction.events({
    'submit form': function(event){
      event.preventDefault();
      console.log('this works');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Hello World");
  });
}
