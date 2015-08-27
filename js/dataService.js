angular.module("MyApp").service("dataService", function() {

    this.getHannah = function () {

        var hannahArray = JSON.parse(localStorage.getItem("hannahLS")) || [];
        hannahArray = hqwArray;
        return hannahArray;
    }

    this.saveHannah = function (elistType, elistDate) {
        var savedHannah = {type: elistType, date: elistDate};
        hannahArray.push(savedHannah);
        localStorage.setItem("hannahLS", JSON.stringify(hannahArray));
    }

    this.removeHannahAt = function (pIndex) {
        hannahArray.splice(pIndex, 1);
        localStorage.setItem("hannahLS", JSON.stringify(hannahArray));
    }

    this.destroyLocalStorage = function () {
        hannahArray.splice(0);
        localStorage.clear();
    }
})