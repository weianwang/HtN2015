Meteor.startup(function(){
    Accounts.loginServiceConfiguration.remove({
        service: "facebook"
    });

    Accounts.loginServiceConfiguration.insert({
        service: "facebook", 
        appId: '1020671264619970',
        secret: 'f7266c04ff9e15f29af2c382fe641c45'

    });
});