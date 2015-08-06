var app = angular.module("myApp", []);
app.controller("listController", function($scope) {
    $scope.listItems;

    $scope.listArray = ['Reeses Pieces', 'milk', 'dog food', 'pomegranates'];

    $scope.addItems = function(){
        $scope.listArray.push($scope.listItems);

        @scope.listItems = '';
    }

    $scope.deleteItems = function(deleteItems){
        var idx = $scope.listArrary.indexOf(deletedItems);
        $scope.listArrary.splice(idx,1);
    }
});
