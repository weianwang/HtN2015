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
	}, 

	addInterest: function(userId, interestId) {
		Profiles.update( {userId: userId}, {interest: interestId.split(',')});
	},

	//FOR API TESTING ATM
	getZipcode: function() {
		this.unblock();
		var api_key = "irg6RlPQd2hCpkihXL0lish6cEHKTydcZtjRP8H2bYEAiXRgJSB1kT8xxPhrouDn";
		return Meteor.http.call("GET", "https://www.zipcodeapi.com/rest/" + api_key + "/radius.json/48104/10/km");
	}
});