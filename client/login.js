Template.login.onCreated(function() {
	this.subscribe('userData');
	this.subscribe('profiles');
});

Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            } 
        }); 
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }, 

	'click #facebook-signup': function(event) {
		Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            } else {
            	var user_Id = Meteor.userId();
				var first_name = Meteor.user().services.facebook.first_name;
				var last_name = Meteor.user().services.facebook.last_name;
				Profiles.insert({userId: user_Id, firstname: first_name, lastname: last_name});
            }
        });

	}
});

