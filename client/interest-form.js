Template.introduction.events({
	/* update database with interest form data */
	'submit form': function(event){
		event.preventDefault(); //prevents autorefresh
		var user_Id = Meteor.userId();
		console.log(user_Id);
	}
});