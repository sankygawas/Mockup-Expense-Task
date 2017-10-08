'use strict';

angular.module('spiderG')

.controller('chatSideBarCtrl', ['$scope','$window','$location','$routeParams','$http',function($scope,$window,$location,$routeParams,$http) {
    
    var self = this; 
    var screenWidth;
   
    self.visible= true;
    self.toggle= function () {
                screenWidth = $window.innerWidth; //$(window).width();
                self.visible = !self.visible; // toggle visibility
                self.largeScreen = ( screenWidth >= 768 );
    }

    //get all users to display
    $http.get("data/users.json").then(function(response){
         self.users = response.data;
    });
    
    //check active link
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }  
    
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

