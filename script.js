

function DrinkIceLevel () {
    let iceLevel = prompt ("About how much ice would you like in your drink?")
    document.getElementById("Ice").innerHTML = iceLevel ;
}



function orderUp() {
    let drinkChoice = prompt ("Which drink would you like to order?")
    const drink1 = "Oolong Ice Tea"
    const drink2 = "Jasmine"
    const drink3 = "Mango Smoothie"
    switch (drinkChoice) {
        case drink1:
            document.getElementById("Drink").innerHTML= drinkChoice ;
                break;

        case drink2:
            document.getElementById("Drink").innerHTML= drinkChoice ;
                break;
        
        case drink3:
            document.getElementById("Drink").innerHTML= drinkChoice ;
            break;
        
        default:
            document.getElementById("Drink").innerHTML= "Please choose a valid drink";
    }


    let topping = prompt ("What topping would you like for your drink?")
    const topping1 = "Mango Star Jelly"
    const topping2 = "Lychee Jelly"
    const topping3 = "Boba Original"
    switch (topping) {
        case topping1:
            document.getElementById("Topping").innerHTML = topping ;
            break;

        case topping2:
            document.getElementById("Topping").innerHTML = topping ;
            break;

        case topping3:
            document.getElementById("Topping").innerHTML = topping ;
            break;

    
        default:
            document.getElementById("debug").innerHTML = "Please enter a valid topping";
            break;
    }

    let sugarLevel = prompt ("How much sugar would you like in your drink?")
    const sugar1 = "0%"
    const sugar2 = "25%"
    switch (sugarLevel) {
        case sugar1:
            document.getElementById("Sugar").innerHTML= "0%";
            break;

        case sugar2:
            document.getElementById("Sugar").innerHTML= "25%";
            break;

        default:
            document.getElementById("Sugar").innerHTML = "Please enter a valid sugar level"
            break;
    }

    let sizeChoice = prompt ("What Size would you like your drink to be?")
    const size1 = "L"
    const size2 = "M"
    const size3 = "S"
    switch (sizeChoice) {
        case size1:
            document.getElementById("Size").innerHTML= sizeChoice ;
            break;

        case size2:
            document.getElementById("Size").innerHTML= sizeChoice ;
            break;

        case size3:
            document.getElementById("Size").innerHTML= sizeChoice ;
            break;

        default:
            document.getElementById("Size").innerHTML= "Please enter a valid drink size"
            break;
    }
}


 /* Need to ask Kit how to roll these into a singular function rather than them being a bunch of separate ones, */

 /*function drinkTopping () {
    let topping = prompt ("What topping would you like for your drink?")
    document.getElementById ("Topping").innerHTML = topping ;
}*/

/*function drinkSugarLevel () {
    let sugarLevel = prompt ("How much sugar would you like in your drink?")
    document.getElementById ("Sugar").innerHTML = sugarLevel ;
}*/

/*function drinkOrder() {
let drinkChoice = prompt ("Which drink would you like to order?");
    document.getElementById("Drink").innerHTML= drinkChoice ;  
}*/

/*function drinkSize() {
    let sizeChoice = prompt ("What Size would you like your drink to be?")
    document.getElementById("Size").innerHTML= sizeChoice ;
}*/