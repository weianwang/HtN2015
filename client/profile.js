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


Template.editProfile.onCreated(function () {
	this.subscribe('profiles');
});

Template.editProfile.helpers({
	currentProfile: function() {
		var user_id = Meteor.userId();
		return Profiles.findOne({userId: user_id});
	}
});

Template.editProfile.events({
	"submit form": function (event) {
		event.preventDefault();
		var user_id = Meteor.userId();
		var currProfile = Profiles.findOne({userId: user_id});

		var firstname = $('[name="firstname"]').val();
		var lastname = $('[name="lastname"]').val();

		Profiles.update( { {userId: user_id}, $set: {
			firstname: $('[name="firstname"]').val(),
			lastname: $('[name="lastname"]').val(),
			zipcode: $('[name="zipcode"]').val(),
			bio: $('[name="bio"]').val()
		}
		});
	}
});