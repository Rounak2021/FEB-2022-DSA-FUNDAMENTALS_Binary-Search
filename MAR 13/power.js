//Write a recursive code to find the x^y . example: 2^5 = 32.

var x = 2;
var y = 5;

function power(x , y) {
    if (y == 0)
        return 1;
    if (x == 0)
        return 0; //It can't be returned, hence 0
    return x * power(x, y - 1);
}
   
   console.log("Power of the given number is " +power(x, y));