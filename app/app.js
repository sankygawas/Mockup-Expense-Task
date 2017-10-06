'use strict';

// Declare app level module which depends on views, and components
angular.module('spiderG', [
  'ngRoute',
  'spiderG.chatHistory',
  'myApp.view2',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider.when('/profile',{
        templateUrl:'views/profile/profile.html'
    })
    .otherwise({redirectTo: '/chatHistory/1'});
}])

//directive for chat sidebar
.directive('chatSidebar', function ($window) {
    var directive = {
        restrict: 'EA',
        templateUrl: 'views/sidebar/chatSideBar.html',
        controllerAs: 'ctrl',
        controller: 'chatSideBarCtrl',
        link: function(scope, elm, attrs) {
            //Way One
           // scope.fromDirectiveFn({arg1:"some message"});
        }
       /* link: function (scope, element, attr, ctrl) {
			  
        }*/
    };

    return directive;
})


//directive for notification sidebar
.directive('notificationSidebar', function ($window) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/notificationSideBar.html',
        controller: 'NotificationSideBarController',
        controllerAs:'notificationBarCntrl'
     /*   controller: function ($scope) {
            var self = this; // self needed because toggle is not bound to this ctrl.
            var screenWidth;
            angular.extend(this, {
                visible: true,
                toggle: function () {
                    screenWidth = $window.innerWidth; //$(window).width();
                    self.visible = !self.visible; // toggle visibility
                    self.largeScreen = ( screenWidth >= 768 );
                }
            });
        }*/
       /* link: function (scope, element, attr, ctrl) {
			  
        }*/
    };

    return directive;
})



//this method written out of angular scope to toggle sidebar from top navbar. 
function toggleChat(){
	var scope = angular.element(document.getElementById("chatSideBar")).scope();
    scope.$apply(function (){
   		scope.ctrl.toggle();
    });
}

function toggleNotification(){
	var scope = angular.element(document.getElementById("notificationSideBar")).scope();
	console.log(scope.NotificationCtrl);
    scope.$apply(function (){
   		scope.notificationBarCntrl.toggle();
    });
}



