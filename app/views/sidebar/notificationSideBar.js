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
    
    
    //get all expenses from json
    $http.get('data/expenses.json').then(function(response){
      self.expenses = response.data;
    });
    
    /*self.addExpense = function(expenseName){
        console.log(expenseName);
    }*/
    
/*    self.newName = function() {
       $scope.lineChartData={a:21, b:"done;lsd,;lsmd"};
        console.log( $scope.lineChartData);
    }
        
$scope.lineChartData={a:2, b:"test"};
//    self.lineChartData={a:2, b:"test"};
        */

}])

.directive('notificationSidebar', function ($window) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/notificationSideBar.html',
        controller: 'NotificationSideBarController',
        controllerAs:'notificationBarCntrl',
        /*scope:{name:'='},*/
         link: function(scope, elem, attrs) {
//            scope.$watch(attrs.name, function(value) {
//        	console.log(value);
        }
        
    };

    return directive;
})
