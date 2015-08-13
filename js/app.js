var MyApp = angular.module("MyApp",[]);
MyApp.controller("NewController", function($scope,DataService){

    $scope.addresses = DataService.getAdds();
        $scope.newAdds = {};

    $scope.addNewAdds = function(){
        DataService.saveAdds($scope.newAdds.name,$scope.newAdds.street,
            $scope.newAdds.city,$scope.newAdds.state,$scope.newAdds.zip);
        $scope.newAdds = {};
    };

    $scope.removeAdds = function(idx){
        DataService.removeAddsAt(idx);
    };

    $scope.clearIt = function(){
        DataService.destroyLocalStorage();
    }
});


