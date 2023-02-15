function drinkOrder() {
let drinkChoice = prompt ("Which drink would you like to order?");
    document.getElementById("Drink").innerHTML= drinkChoice ;  
}
function drinkSize() {
    let sizeChoice = prompt ("What Size would you like your drink to be?")
    document.getElementById("Size").innerHTML= sizeChoice ;
}
function DrinkIceLevel () {
    let iceLevel = prompt ("About how much ice would you like in your drink?")
    document.getElementById("Ice").innerHTML = iceLevel ;
}
function drinkSugarLevel () {
    let sugarLevel = prompt ("How much sugar would you like in your drink?")
    document.getElementById ("Sugar").innerHTML = sugarLevel ;
}
/*function drinkTopping () {
    let topping = prompt ("What topping would you like for your drink?")
    document.getElementById ("Topping").innerHTML = topping ;
}*/

function whatever() {
    let topping = prompt ("What topping would you like for your drink?")
    const topping1= "Mango Star Jelly"
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
}


 /* Need to ask Kit how to roll these into a singular function rather than them being a bunch of separate ones, */