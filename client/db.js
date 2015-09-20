Template.database.onCreated(function (){
	this.subscribe('Profiles');
	console.log('Database initiated');
;

Template.database.helpers({
	'getCurrentUser' : function(){
		return Profiles.find({userId: Meteor.userId()})
	},

	'getUserInterests' : function (){
		return getCurrentUser.interests;
	},

	'getUserName' : function(){
		return getCurrentUser.firstname + getCurrentUser.lastname;
	}
});

Template.database.events({

});

// we want to take zipcode data of each person and use zipcode and/or google maps api to determine who is in the radius