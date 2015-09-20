//stuff to do when server starrts up

Meteor.startup(function () {

	if (Profiles.find().count() == 0) {

	var data = [
		{
			userId: 100,
			firstname: "Mary",
			lastname: "Kate",
			zipcode: 48104,
			bio: "Hi! I'm Mary Kate, a student at the University of Michigan.",
			interest: ["Dance", "Cooking"]
		},
		{
			userId: 101,
			firstname: "Betty",
			lastname: "White",
			zipcode: 48109,
			bio: "Hi! I'm Betty. I currently study philosophy at the University of Michigan.",
			interest: ["Singing", "Cooking"]
		},
		{
			userId: 102,
			firstname: "Adam",
			lastname: "Levine",
			zipcode: 90210,
			bio: "Hi! I'm Adam.",
			interest: ["Singing", "Cooking"]
		}
	];

	for (var i = 0; i < data.length; ++i) {
		Profiles.insert({
			userId: data[i].userId,
			firstname: data[i].firstname,
			lastname: data[i].lastname,
			zipcode: data[i].zipcode,
			bio: data[i].bio,
			interest: data[i].interest
		});
	}

	};

});