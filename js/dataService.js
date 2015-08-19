/*
 * Created by shannonwilliams on 8/10/15.
 */
angular.module("MyApp").service("dataService",function(){

    var addressArray = [];

    this.getAdds = function(){
        var addsArray =JSON.parse(localStorage.getItem("addressesLS")) || [];
        addressArray = addsArray;
            console.log(addsArray);
        return addressArray;

    }

    this.saveAdds = function(pName,pAddress,pCity,pState,pZip){
        var savedAdds = {name: pName, address: pAddress, city:pCity, state: pState, zip: pZip };
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