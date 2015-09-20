// PROFILE DISPLAY
Template.profileDisplay.helpers({
    user: function() {
        return Profiles.find();
    }
});

// INTERESTS
Template.interests_name_user.helpers({
    interests: function() {
        return Profiles.findOne({userID: Meteor.userID()}).fetch({'interests'});
    }
});

