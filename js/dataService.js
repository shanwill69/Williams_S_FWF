angular.module("MyApp").service("dataService", function() {

   
  /* ----GET HANNAH ------------------------- */  
   
  var hannahArray = [
	  {
		newWork: "My Paper",
		newDay: "Tuesday",
		newHours: "8 to 5pm"
	  },
	  {
		newWork: "My Paper2",
		newDay: "Wednesday",
		newHours: "9 to 5pm"
	  }
	];
	
	/*RETURNS THE ARRAY OF HANNAH*/
    this.getHannah = function () {
	//CHANGED VAR NAME
        var str = localStorage.getItem("hannahLS");
        hannahArray = JSON.parse(str)  || hannahArray;
        return hannahArray;
    }

	 /*ADDS A NEW HANNAH TO THE HANNAH ARRAY*/
     //WRONG NAMES HAVE TO MATCH VIEW01.HTML PAGE        
    this.saveHannah = function (newWork, newDay,newHours) {
        var saveHannah = {  //removed D
			hannahnewWork: newWork, 
			hannahnewDay: newDay,
			hannahnewHours: newHours
		};
		
        hannahArray.push(saveHannah);  //REMOVED D
        var str = JSON.stringify(hannahArray);
        localStorage.setItem("hannahLS", str);
    }

    this.removeHannahAt = function (hannah) {
        hannahArray.splice(hannahArray.indexOf(hannah), 1);
        localStorage.setItem("hannahLS", JSON.stringify(hannahArray));
    }
});