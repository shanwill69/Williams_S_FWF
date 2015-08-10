var app = angular.module("myApp",[]);
app.controller("listController", function($scope,dataService){
    $scope.listItem;

    $scope.listArray = dataService.getItem();

    $scope.addItem = function(){
        dataService.addItem($scope.listItem);

        @scope.listItem = '';
    }

    $scope.deleteItem = function(deleteItem){
        dataService.removeItem(deleteItem);
    }
});
