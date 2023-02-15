function DrinkOrder() {
var DrinkChoice = prompt ("Which drink would you like to order?");
    document.getElementById("Drink").innerHTML= DrinkChoice ;  
}
function DrinkSize() {
    var SizeChoice = prompt ("What Size would you like your drink to be?")
    document.getElementById("Size").innerHTML= SizeChoice ;
}
function DrinkIceLevel () {
    var IceLevel = prompt ("About how much ice would you like in your drink?")
    document.getElementById("Ice").innerHTML = IceLevel ;
}
function DrinkSugarLevel () {
    var SugarLevel = prompt ("How much sugar would you like in your drink?")
    document.getElementById ("Sugar").innerHTML = SugarLevel ;
}
function DrinkTopping () {
    var Topping = prompt ("What topping would you like for your drink?")
    document.getElementById ("Topping").innerHTML = Topping ;
}

 /* Need to ask Kit how to roll these into a singular function rather than them being a bunch of separate ones, */