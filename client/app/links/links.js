angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    //TODO: figure out user param on getlinks
    Links.getlinks()
      .then(function(links){
        $scope.data['links'] = links;
      });
  };

  $scope.getLinks();

});

