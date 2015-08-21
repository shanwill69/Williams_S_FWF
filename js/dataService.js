/** Created by shannonwilliams on 8/21/15. **/


angular.module('myApp', ['ngRoute'])

    .config(function($routeProvider){
        $routeProvider.when('/view01',{
            templateUrl : "view01.html",
            controller : "loganCotroller"
        }).when('/view02', {
            templateUrl : "view02.html",
            controller : "hannahController"
        }).when("view03/:Koalas", {
            templateUrl : "view03.html",
            controller : "schoolController"
        }).otherwise({
            redirectTo : "/view01."
        });

    })


    /* creating controllers */

    .controller('loganController', function($scope,dataService){

        $scope.logActivity;
        $scope.logDate;

        $scope.activityArray = dataService.getActivity();

        $scope.addActivity = function(){
            dataService.newActivity($scope.logActivity, $scope.logDate);

            $scope.logActivity = '';
            $scope.logDate = '';

        $scope.deleteActivity = function(actToDelete){
            dataService.removeActivity(actToDelete);
        }

        $scope.resetForm = function() {
            $scope.logActivity = '';
            $scope.logDate = '';
        }


        }

    }).controller('loganController', function($scope,$routeParams,DataService){

        $scope.logan;

        $scope.word = $routeParams.Koalas;


    })

