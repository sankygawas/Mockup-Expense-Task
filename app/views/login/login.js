angular.module('spiderG')
/*
.controller('loginController',function($rootScope,$scope,$location){
    $scope.isLoggedIn = false;
    $scope.login = function(){
        $scope.isLoggedIn = true;
       
        
    }
    
})
*/


.controller('LoginController', ['$scope', '$rootScope', '$location', 'AuthenticationService', function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
  
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/chatHistory/1')
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);