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
var howMany = function(){
    var count = prompt('How many would you like to order');
    while( isNaN(count) ){
        count = prompt('please enter a number, How many would you like to order?')
    } 
    return Number(count);
}


var showOrder = function(){
    var total = howMany();
    var result = '';

    for(var i=0; i < total; i++){
        result += '<li> Model #' + i + '</li>';
    }

    return result
}

function nameOfUser(name)
{
    return name;
    
}