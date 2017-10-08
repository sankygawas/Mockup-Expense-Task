'use strict';

angular.module('spiderG')

.config(['$routeProvider', function($routeProvider) {
/*  $routeProvider.when('/chatHistory', {
    templateUrl: 'views/chat/chatHistory.html',
    controller: 'chatHistoryCtrl'
  })
 .when('/chatHistory/:userId',{
      templateUrl: 'views/chat/chatHistory.html',
      controller: 'chatHistoryCtrl',
      controllerAs:'ctrl'
  });*/
}])

.controller('chatHistoryCtrl', ['$scope','$window','$location','$routeParams','$http',function($scope,$window,$location,$routeParams,$http) {

    //get all users from json
    $http.get("data/users.json").then(function(response){
       $scope.users = response.data;
        $scope.user = $scope.getUser($routeParams.userId);
        //$scope.userName = user.userName;
        //console.log($scope.user);
    });
    
     //get user by UserId
     $scope.getUser=function(id){
        var user = $scope.users.filter(function(item) {
          return item.id == id;
        })[0];
         return user;
     }  
}])
