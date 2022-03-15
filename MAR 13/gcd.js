//Find GCD of two number using recursion. GCD(4,8) => 4.

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log("GCD of two number is " +gcd(4, 8));