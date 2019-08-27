function createGreeting(){
    // var today = new Date();
    var hourNow = prompt("What is the time?"); // 4
    // hourNow = 4;
    var greeting;

    console.log("Hello Everyone!");

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }

    console.log('The greeting is: ' + greeting);

    return '<h3>'+ greeting + '</h3>';
}


// parameters are optional
var showOrder = function(param1){
    var order = prompt('What would you like to order');
    var item; 

    if(order === 'house'){
        item = '<img src="images/house.jpg">';
    } else if( order === 'hotel'){
        item = '<img src="images/hotel.jpg">';
    } else{
        item = '<strong> You ordered NOTHING! </strong>';
    }

    return item;
}

function nameOfUser(name)
{
    return name;
    
}