Template.profile.onCreated(function () {
    this.subscribe('profiles');
    console.log('subscribed to profiles!');
 });

Template.profile.helpers({
	//returns the profile for the current user
	getProfile: function() {
		return Profiles.find({userId: Meteor.userId()});
	}
});