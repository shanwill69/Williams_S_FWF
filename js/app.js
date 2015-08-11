var app = angular.module("myApp", []);
app.controller("listController", function($scope) {
    $scope.listItems;

    $scope.listArray = ['Reeses Pieces', 'milk', 'dog food', 'pomegranates'];

    $scope.addItems = function(){
        $scope.listArray.push($scope.listItems);

        $scope.listItems = '';  //@ symbol???? Should be $ for scope
    }

    $scope.deleteItems = function(deleteItems){
        var idx = $scope.listArray.indexOf(deletedItems);  //Array  spelled wrong
        $scope.listArray.splice(idx,1);  //Array  spelled wrong
    }
});
