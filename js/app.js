var theApp = angular.module("MyApp",[]);
theApp.controller("NewController", function($scope,dataService){

    $scope.addresses = dataService.getAdds();
        $scope.newAdds = {};

    $scope.addNewAdds = function(){
        dataService.saveAdds($scope.newAdds.company,$scope.newAdds.street,
            $scope.newAdds.city,$scope.newAdds.state,$scope.newAdds.zip);
        $scope.newAdds = {};
    };

    $scope.removeAdds = function(idx){
        dataService.removeAddsAt(idx);
    };

    $scope.clearIt = function(){
        dataService.destroyLocalStorage();
    }
});


