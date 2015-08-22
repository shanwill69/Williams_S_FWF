/*
 * Created by shannonwilliams on 8/10/15.
 */
angular.module('MyApp',['ngRoute'])

    .config(function($routeProvider){

        $routeProvider.when('/view01',{
            templateUrl : "view01.html",
            controller : "hannahController"
        }).when('/view02',{
            templateUrl : "view02.html",
            controller : "loganController"
        }).when('/view03/:Koala',{
            templateUrl : "view03.html",
            controller : "schoolController"
        }).otherwise({
            redirectTo : "/view01"
        });

    })

.controller('hannahController', function($scope,dataService){

        $scope.newActs;
        $scope.newDate;
        $scope.newTime;

        $scope.activitiesArray = dataService.getActivities();

        $scope.addActivities = function() {
            dataService.newActivities($scope.newActs, $scope.newDate, $scope.newTime);

            $scope.newActs = '';
            $scope.newDate = '';
            $scope.newTime = '';
        }

    }).controller('loganController', function($scope,dataService){

        $scope.newActs;
        $scope.newDate;
        $scope.newTime;

        $scope.activitiesArray = dataService.getActivities();

        $scope.addActivities = function() {
            dataService.newActivities($scope.newActs, $scope.newDate, $scope.newTime);

            $scope.newActs = '';
            $scope.newDate = '';
            $scope.newTime = '';
        }

    }).controller('schoolController', function($scope,dataService) {

        $scope.newActs;
        $scope.newDate;
        $scope.newTime;

        $scope.activitiesArray = dataService.getActivities();

        $scope.addActivities = function () {
            dataService.newActivities($scope.newActs, $scope.newDate);

            $scope.newActs = '';
            $scope.newDate = '';
        }

    });
