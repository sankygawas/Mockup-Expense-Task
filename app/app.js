'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])

//directive for chat sidebar
.directive('chatSidebar', function ($window) {
    var directive = {
        restrict: 'EA',
        templateUrl: 'components/sidebar/chatSideBar.html',
        controllerAs: 'ctrl',
        controller: function ($scope) {
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
        },
       /* link: function (scope, element, attr, ctrl) {
			  
        }*/
    };

    return directive;
})


//directive for notification sidebar
.directive('notificationSidebar', function ($window) {
    var directive = {
        restrict: 'EA',
        templateUrl: 'components/sidebar/notificationSideBar.html',
        controllerAs: 'NotificationCtrl',
        controller: function ($scope) {
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
        },
       /* link: function (scope, element, attr, ctrl) {
			  
        }*/
    };

    return directive;
})


/*//controller for left side chat sidebar
.controller('chatController',function($scope,$window){
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
});
*/


//this method written out of angular scope to toggle sidebar from top navbar. 
function toggleChat(){
	var scope = angular.element(document.getElementById("chatSideBar")).scope();
	console.log(scope.ctrl);
    scope.$apply(function (){
   		scope.ctrl.toggle();
    });
}

function toggleNotification(){
	var scope = angular.element(document.getElementById("notificationSideBar")).scope();
	console.log(scope.NotificationCtrl);
    scope.$apply(function (){
   		scope.NotificationCtrl.toggle();
    });
}



