
//I MOVED THIS FROM YOUR DATASERVICE PAGE....

/*
 * Created by shannonwilliams on 8/10/15.
 */

var myLists = angular.module('MyApp',['ngRoute'])

    .config(function($routeProvider){

        $routeProvider.when('/view01',{
            templateUrl : "view01.html",
            controller : "hannahController"
        }).when('/view02',{
            templateUrl : "view02.html",
            controller : "loganController"
        }).when('/view03/:Koala',{    //Put Koala as your param. name on the index.html source code
            templateUrl : "view03.html",
            controller : "schoolController"
        }).otherwise({
            redirectTo : "/view01"
        });

    })

.controller('hannahController', function($scope,dataService){

        $scope.newWork;
        $scope.newDay;
        $scope.newHours;

        $scope.hannahArray = dataService.getHannah();

        $scope.addHannah = function() {
            dataService.newHannah($scope.newWork, $scope.newDay, $scope.newHours);

            $scope.newWork = '';
            $scope.newDay = '';
            $scope.newHours = '';
        };

		$scope.removeHannah = function(idx){
		        dataService.removeHannahAt(idx);
		    }

	    $scope.nukeIt = function(){
		        dataService.destroyLocalStorage();
		    }

		}).controller('loganController', function($scope,dataService){

        $scope.newActs;
        $scope.newDate;
        $scope.newTime;

        $scope.loganArray = dataService.getLogan();

        $scope.addALogan = function() {
            dataService.newLogan($scope.newActs, $scope.newDate, $scope.newTime);

            $scope.newActs = '';
            $scope.newDate = '';
            $scope.newTime = '';
        }

        $scope.removeLogan = function(idx){
            dataService.removeLoganAt(idx);
        }

        $scope.nukeIt = function(){
            dataService.destroyLocalStorage();
        }

    }).controller('schoolController', function($scope,dataService) {

        $scope.newAssign;
        $scope.newDue;

        $scope.schoolArray = dataService.getSchool();

        $scope.addSchool = function () {
            dataService.newSchool($scope.newAssign, $scope.newDue);

            $scope.newAssign = '';
            $scope.newDue = '';
        }
        $scope.removeSchool = function(idx){
            dataService.removeSchoolAt(idx);
        }

        $scope.nukeIt = function(){
            dataService.destroyLocalStorage();
        }

    });


