/**
 * Created by shannonwilliams on 8/10/15.
 */
angular.module("myApp").service("dataService", function(){

    var listArray = ['Reeses Pieces', 'milk', 'dog food', 'pomegranates'];

    this.getItem = function(){
        return listArray;
    }

    this.addItem = function(pItem){
        listArray.push(pItem);
    }

    this.removeItem = function(pItem){
        listArray.splice(listArray.indexOf(pItem),1);
    }

});