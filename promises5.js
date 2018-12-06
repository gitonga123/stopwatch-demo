getRandomNumber(function(number)){
    console.log(number); //logs 42

    getNameFromNumber(number, function(name)){
        console.log(name) //logs 'Bob'

        getAgefromNumber(age, function(age)){
            console.log(age) //logs 21
            //do something with age

        },
        function(error){
            console.log(error);
        }
    }, 
    function(error){
        console.log(error);
    }
},function(error){
    console.log(error);
});

// chaining Asy operations using promises
//getRandomNumber() returns a promise containing a random number
getRandomNumber().then(function(result) {  
    console.log(result) // 42
    return getNameFromNumber(result); //returns a promise containing a string representing a name

}).then(function(result2){
    console.log(result2) //"Bob"
    return getAgeFromName(result2);  //returns a promise containing a number representing an age

}).then(function(result3){
    console.log(result3) //21

}.catch(function(error){
    console.log(error)
});