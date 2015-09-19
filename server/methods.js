Meteor.methods({
	updateProfile: function(userId, firstname, lastname, zipcode, bio) {
		Profiles.update( {userId: userId}, 
			{$set: {
				firstname: firstname,
				lastname: lastname,
				zipcode: zipcode,
				bio: bio
			}}
			);
	}
	/*
	addInterest: function(userId, interestId) {
		Profiles.update(
		);
	}
	*/
});