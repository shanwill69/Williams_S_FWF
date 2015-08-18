var theApp = angular.module("MyApp",[]);
theApp.controller("NewController", function($scope,dataService){

    $scope.addresses = dataService.getItem();
        $scope.newAdds = {};

    $scope.addNewAdds = function(){
        dataService.saveAdds($scope.newAdds.name,$scope.newAdds.street,
            $scope.newAdds.city,$scope.newAdds.state,$scope.newAdds.zip);
        $scope.newAdds = {};
    };

    $scope.removeAdds = function(idx){
        dataService.removeAddsAt(idx);
    };

    $scope.clearIt = function(){
        dataServiceataService.destroyLocalStorage();
    }
});


