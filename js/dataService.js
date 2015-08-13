/**
 * Created by shannonwilliams on 8/10/15.
 */
angular.module("MyApp").service("DataService", function(){

    var addressArray = [];

    this.getAdds = function(){
        var addsArray =JSON.parse(localStorage.getAdds("addressesLS")) ||[];
        addressArray = addsArray;
            console.log(addsArray);
        return addsArray;

    }

    this.saveAdds = function(pName,pAddress,pCity,pState,pZip){
        var savedAdds = {name: pName, address: pAddress, city:pCity, state: pState, zip: pZip };
        addsArray.push(savedAdds);
        localStorage.setItem("addressesLS", JSON.stringify(addsArray));
    }
    this.removeAddsAt = function(pIndex){
        addsArray.splice(pIndex,1);
        localStorage.setItem("addressesLS",JSON.stringify(addsArray));
    }
    this.destroyLocalStorage = function(){
        addsArray.splice(0);
        localStorage.clear();
    }

});