var app = angular.module("myApp",[]);
app.controller("listController", function($scope,dataService){
    $scope.listItem;

    $scope.listArray = dataService.getItem();

    $scope.addItem = function(){
        dataService.addItem($scope.listItem);


    $scope.listItems = '';
    }

    $scope.deleteItems = function(deleteItems){
        var idx = $scope.listArray.indexOf(deletedItems);
        $scope.listArray.splice(idx,1);

        @scope.listItem = '';
    }

    $scope.deleteItem = function(deleteItem){
        dataService.removeItem(deleteItem);

    }
});
