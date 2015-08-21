/*
 * Created by shannonwilliams on 8/10/15.
 */
angular.module("MyApp").service("dataService",function(){

    var activityArray = [];

    this.getActs = function(){
        var actsArray =JSON.parse(localStorage.getItem("activitiesLS")) || [];
        activitiesArray = actsArray;
            console.log(actsArray);
        return activitiesArray;

    }

    this.saveActs = function(pActivity,pDate,pTime){
        var savedActs = {activity: activity, date: pDate, time:pTime };
        activitiesArray.push(savedActs);
        localStorage.setItem("activitiesLS",JSON.stringify(activitiesArray));
    }
    this.removeActsAt = function(pIndex){
        activitiesArray.splice(pIndex,1);
        localStorage.setItem("activitiesLS",JSON.stringify(activitiesArray));
    }
    this.destroyLocalStorage = function(){
        activitiesArray.splice(0);
        localStorage.clear();
    }

});