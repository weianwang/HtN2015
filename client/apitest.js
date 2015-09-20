Template.apiTest.helpers({
  /*
  responseData: function() {
    var result = Meteor.call("getZipcode", function (error, results) {
      console.log(results);
      res = JSON.parse(results.content);
      console.log(results.zip_codes);
      console.log(results.zip_codes.zip_code);
      return JSON.parse(results.content);
    });

    return result;
  },
  */

  testZipDistance: function(zip1, zip2) {
    var result = ReactiveMethod.call("getDistanceBetweenZips", zip1, zip2, function(error, result) {
        return result;
        /*
        console.log(result);
        res = JSON.parse(result.content);
        console.log(res);
        console.log(res.distance);
        console.log(res['distance']);
        return res.distance;
        */
    }); 

    var res = JSON.parse(result.content);
    var dist = res.distance;
    return dist;
  },
/*
  ZipDistance2: function(zip1, zip2) {
    return Template.instance().myAsyncValue.get();

  }*/
});
/*
Template.apiTest.created = function (zip1, zip2){
    var self = this;
    self.myAsyncValue = new ReactiveVar("Waiting for response from server...");
    Meteor.call("getDistanceBetweenZips", zip1, zip2, function (err, asyncValue) {
        if (err)
            console.log(err);
        else 
            res = JSON.parse(result.content);
          dist = res.distance;
            self.myAsyncValue.set(dist);
    });
}
*/


