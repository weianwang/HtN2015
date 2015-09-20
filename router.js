Router.configure ({
	layoutTemplate: 'htn15'
	/*notFoundTemplate: 'notFound' */
});

Router.route (
	'/', 
	{
		name: 'home',
		template: 'login'
	}
);

Router.route (
	'/login', 
	{
		name: 'login',
		template: 'login'
	}
);

Router.route (
	'/edit-profile', 
	{
		name: 'editProfile',
		template: 'editProfile'
	}
);

Router.route (
	'/interest-search', 
	{
		name: 'interestSearch',
		template: 'interestSearch'
	}
);