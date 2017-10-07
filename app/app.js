'use strict';

// Declare app level module which depends on views, and components
angular.module('spiderG', [
  'ngRoute',
  'myApp.view2',
  'ngAnimate'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
    
  $routeProvider.when('/chatHistory', {
    templateUrl: 'views/chat/chatHistory.html',
    controller: 'chatHistoryCtrl'
  })
 .when('/chatHistory/:userId',{
      templateUrl: 'views/chat/chatHistory.html',
      controller: 'chatHistoryCtrl',
      controllerAs:'ctrl'
  })
  .when('/profile',{
        templateUrl:'views/profile/profile.html'
  })
  .when('/addExpense',{
        templateUrl:'views/expense/addexpense.html'
  })
  .otherwise({redirectTo: '/chatHistory/1'});
}])



//this method written out of angular scope to toggle sidebar from top navbar. 
function toggleChat(){
	var scope = angular.element(document.getElementById("chatSideBar")).scope();
    scope.$apply(function (){
   		scope.ctrl.toggle();
    });
}

function toggleNotification(){
	var scope = angular.element(document.getElementById("notificationSideBar")).scope();
    scope.$apply(function (){
   		scope.notificationBarCntrl.toggle();
    });
}



