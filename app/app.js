'use strict';

// Declare app level module which depends on views, and components

angular.module('spiderG', [
  'ngRoute',
  'ngAnimate',
  'Authentication',
  'ngCookies'
])

.run(['$rootScope', '$location', '$cookieStore', '$http',  function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.location = $location;
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; 
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if (!$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginController'
  })
  .when('/chatHistory', {
    templateUrl: 'views/chat/chatHistory.html',
    controller: 'chatHistoryCtrl'
  })
  .when('/chatHistory/:userId',{
      templateUrl: 'views/chat/chatHistory.html',
      controller: 'chatHistoryCtrl',
      controllerAs:'ctrl'
  })
  .when('/profile',{
       templateUrl:'views/profile/profile.html',
       controller:'profileController'
  })
  .when('/addExpense',{
        templateUrl:'views/expense/addexpense.html',
  })
  .when('/addTask',{
        templateUrl:'views/task/addtask.html',
  })
    .otherwise({redirectTo: '/login'});

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




