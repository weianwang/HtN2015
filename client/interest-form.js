Template.introduction.events({
	/* update database with interest form data */
	'submit form': function(event){
		event.preventDefault(); //prevents autorefresh
		var user_interests = $('[name="userinterests"]').val();
		Meteor.call("addInterest", Meteor.userId(), user_interests);
	}
});