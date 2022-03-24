"use strict";
var z = 100;
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 15);
console.log('Sum of the two numbers is: ' + sum);
function evenOdd(number) {
    if ((number % 2) == 0) {
        return "Even";
    }
    else {
        return "ODD";
    }
}
function addToZ(x, y) {
    return x + y + z;
}
function Concat(x, y) {
    return x + y;
}
var text = Concat("Flip", "Flop");
console.log(text);
