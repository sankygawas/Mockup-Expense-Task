'use strict';

angular.module('spiderG')

.controller('chatSideBarCtrl', ['$scope','$window','$location','$routeParams','$http','AuthenticationService',function($scope,$window,$location,$routeParams,$http,AuthenticationService) {
    
    var self = this; 
   
    self.visible= true;
    self.toggle= function () {
          self.visible = !self.visible; // toggle visibility
    }

    //get all users to display
    $http.get("data/users.json").then(function(response){
         self.users = response.data;
    });
    
    //check active link
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }  
     $scope.currentUser = AuthenticationService.getCredentials();
    
    
}])

.directive('chatSidebar', function ($window) {
    var directive = {
        restrict: 'EA',
        templateUrl: 'views/sidebar/chatSideBar.html',
        controllerAs: 'ctrl',
        controller: 'chatSideBarCtrl'
    };

    return directive;
})

