Template.introduction.events({
	/* update database with interest form data */
	'submit form': function(){
		event.preventDefault(); //prevents autorefresh
		var userName = Meteor.users.find().fetch().services.facebook.first_name;
		console.log(userName);
	}
});