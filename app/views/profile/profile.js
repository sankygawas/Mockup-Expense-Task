angular.module('spiderG')
.controller('profileController',function($scope,AuthenticationService){
    $scope.currentUser = AuthenticationService.getCredentials();
            
})