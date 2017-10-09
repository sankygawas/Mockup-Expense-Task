'use strict';

angular.module('spiderG')

//controller notification sidebar to toggle on off
.controller('NotificationSideBarController', ['$scope','$window','$location','$routeParams','$http',function($scope,$window,$location,$routeParams,$http) {
    var self = this; 
    self.visible= true;
    self.toggle= function () {
                self.visible = !self.visible; // toggle visibility
    }
    
    //get all expenses from json
    $http.get('data/expenses.json').then(function(response){
      self.expenses = response.data;
      $scope.expenses =  response.data;
    });
    
    //get all tasks from json
    $http.get('data/tasks.json').then(function(response){
      self.tasks = response.data;
      $scope.tasks =  response.data;

    });
    
}])


//Directive for notification sidebar to toggle on off
.directive('notificationSidebar', function ($compile) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/notificationSideBar.html',
        transclude: true,
        controller: 'NotificationSideBarController',
        controllerAs:'notificationBarCntrl'
        
    };

    return directive;
})

//directive for  expense object
.directive('expensedirective', function ($compile) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/expenseTemplate.html',
        scope:{expense:'='}
    };

    return directive;
})

//controller for exppenses
.controller('ExpenseController',function($scope,$compile,$element,$location){
    //function to add expense to Dom
        this.addExpense = function () {
            var name = $scope.name;
            var date = $scope.date;
            var cost = $scope.cost
            $scope.expense = {'name':name,'inr':cost,'date':date}
            console.log($scope);
            var ele = document.getElementById('expenseList');
            
            //add expense to dom
            angular.element(ele).append( $compile("<expensedirective expense='expense' ></expensedirective>")($scope) )
            $location.path('/chatHistory/1');
            alert('Expense Added successfully')
        
        };
})


//directive for  task object
.directive('taskdirective', function ($compile) {
    var directive = {
        restrict: 'E',
        templateUrl: 'views/sidebar/taskTemplate.html',
        scope:{task:'='}
    };

    return directive;
})

//controller for tasks
.controller('TaskController',function($scope,$compile,$element,$location){
    //function to add task to Dom
        this.addTask = function () {
            var task = $scope.task;
            var date = $scope.date;
            var status = $scope.status
            $scope.task = {'task':task,'status':status,'date':date}
            var ele = document.getElementById('taskList');
            console.log($scope.task)    ;
            //add expense to dom
            angular.element(ele).append( $compile("<taskdirective task='task' ></taskdirective>")($scope) )
            $location.path('/chatHistory/1');
            alert('Task Added successfully')
        
        };
})


