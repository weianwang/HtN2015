if (Meteor.isClient) {
  Template.select.helpers({
    'categories': function(){
      // filler categories at the moment 
      return ['Food', 'Dance', 'Music'];
    }
  });

  Template.select.events({
    'change #category-select': function(event, template){
      var category = $(event.currentTarget).val();
      console.log("category :" + category);
      // just a filler for now, we will see what it takes later
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Hello World");
  });
}
