var theApp = angular.module("MyApp",[]);
theApp.controller("hannahController", function($scope,dataService){

    $scope.activitiesArray = dataService.getActs();
        $scope.newActs = {};

    $scope.addNewActs = function(){
        dataService.saveActs($scope.newActs,$scope.newDate,
            $scope.newTime);
        $scope.newActs = {};
    };

    $scope.removeActs = function(idx){
        dataService.removeActsAt(idx);
    }

    $scope.clearIt = function(){
        dataServiceataService.destroyLocalStorage();
    }
});


