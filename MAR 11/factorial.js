//Write a recursive code to find the factorial of a user defined N 
//example : N = 5 => 5! => 120 must be printed on screen.     

let num = 5;
function factorialNumber(n) {
    if (n == 0){
    return 1;
    }else{
    return n * factorialNumber(n - 1);
    }
  }
  console.log( num + " ! = " + factorialNumber(num));