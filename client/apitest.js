Template.apiTest.helpers({
  responseData: function() {
    /*
    var api_key = "js-iuOK5BlVWI8nDybp4WcTOga2Uz0GfrOxWCh1eCXbl5zYDKoHHABvRMyMlzsA1h8X";
    this.unblock();
    var result = Meteor.http.call("GET", "https://www.zipcodeapi.com/rest/" + api_key + "/radius.json/48104/10/km");
    console.log(result); */

    var result = Meteor.call("getZipcode", function (error, results) {
      console.log(results);
    });
    
    return result;
  }
});

