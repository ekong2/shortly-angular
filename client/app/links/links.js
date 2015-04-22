angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    //TODO: figure out user param on getlinks
    Links.getlinks(user)
      .then(function(links){
        $scope.data = links;
      });
  };

});

