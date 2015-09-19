Meteor.publish (
	"profiles",
	function() {
		return Profiles.find();
	}
);

Meteor.publish (
	"userData", 
	function(){
		if (this.userId){
      		return Meteor.users.find({_id: this.userId})
    	} else {
      		this.ready();
    	}
	}
);