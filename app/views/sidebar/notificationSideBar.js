'use strict';

angular.module('spiderG')

.controller('NotificationSideBarController', ['$scope','$window','$location','$routeParams','$http',function($scope,$window,$location,$routeParams,$http) {
    
    var self = this; // self needed because toggle is not bound to this ctrl.
    var screenWidth;
   
    self.visible= true;
    self.toggle= function () {
                screenWidth = $window.innerWidth; //$(window).width();
                self.visible = !self.visible; // toggle visibility
                self.largeScreen = ( screenWidth >= 768 );
    }

}])

.directive('notificationSidebar', function ($window) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/notificationSideBar.html',
        controller: 'NotificationSideBarController',
        controllerAs:'notificationBarCntrl'
    };

    return directive;
})
