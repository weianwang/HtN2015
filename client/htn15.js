// PROFILE DISPLAY
Template.profileHolder.helpers({
    user: function() {
        return Profiles.find();
    }
});

// INTERESTS
Template.interestNavBar.helpers({
    interests: function() {
        return Profiles.findOne({userID: Meteor.userID()}).interests;
    }
});


Template.htn15.events({
	"click .logout": function(event) {
      event.preventDefault();
      Meteor.logout();
      Router.go('/');
    }
});
