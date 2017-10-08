'use strict';
angular.module('spiderG')
.controller('AddExpenseController',function($scope){
    $scope.addExpense = function(){
        console.log($scope.name);
        
    }
})