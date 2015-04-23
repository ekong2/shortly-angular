angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};


  //TODO: make this actually shorten the link
  $scope.addLink = function(link){
    Links.addlink(link)
      .then(function(links){
        $scope.link['link'] = link;
      });
  };

});
