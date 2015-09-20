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

