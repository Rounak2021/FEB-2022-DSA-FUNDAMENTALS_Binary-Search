//Write a recursive code for printing the Fibonacci series up to N.

const series = prompt('Enter how much range do you want-  ');
function fibonacciSeries(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacciSeries(num-1) + fibonacciSeries(num - 2);
    }
}
if(series <=0) {
    alert('Enter a positive integer.');
}
else {
    for(let i = 1; i <= series; i++) {
        document.write("&nbsp &nbsp ");
        document.write(fibonacciSeries(i));
    }
}