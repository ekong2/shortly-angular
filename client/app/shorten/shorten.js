angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(link){
    Links.addlink(link)
      .then(function(links){
        $scope.link['link'] = link;
      });
  };

});
