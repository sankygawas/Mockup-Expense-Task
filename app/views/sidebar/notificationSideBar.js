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
        $scope.expenses =  response.data;
        
    });
    

       self.addExpense = function(){
           var name = $scope.name;
           var date = $scope.date;
           var cost = $scope.cost;
           var expense = {'name':name,'inr':cost,'date':date}
            $scope.expenses.push(expense);
       /* console.log( $scope.expenses);*/
           
        
    }
    

}])

.directive('notificationSidebar', function ($compile) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/notificationSideBar.html',
        transclude: true,
        controller: 'NotificationSideBarController',
        controllerAs:'notificationBarCntrl',
    
         link: function(scope, element, attrs,ctrl) {
        }
        
    };

    return directive;
})

.directive('expensedirective', function ($compile) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/expenseTemplate.html',
        scope:{expense:'=',isAdd:'@'},
        link: function(scope, element, attrs) {
                
        }
    };

    return directive;
})


.controller('ExpenseController',function($scope,$compile,$element,$location){
        $scope.isAdd = true;
        this.addExpense = function () {
             var name = $scope.name;
            var date = $scope.date;
            var cost = $scope.cost
            $scope.expense = {'name':name,'inr':cost,'date':date}
            
            var ele = document.getElementById('expenseList');
            
            angular.element(ele).append( $compile("<expensedirective expense='expense' isAdd=true></expensedirective>")($scope) )
            alert('Expense Added successfully')
            $location.path('/chatHistory/1');
        
        };
})

