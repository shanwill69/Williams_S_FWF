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

    this.saveActs = function(pName,pAddress,pCity,pState,pZip){
        var savedActs = {name: pName, address: pAddress, city:pCity, state: pState, zip: pZip };
        addressArray.push(savedAdds);
        localStorage.setItem("addressesLS",JSON.stringify(addressArray));
    }
    this.removeAddsAt = function(pIndex){
        addressArray.splice(pIndex,1);
        localStorage.setItem("addressesLS",JSON.stringify(addressArray));
    }
    this.destroyLocalStorage = function(){
        addressArray.splice(0);
        localStorage.clear();
    }

});