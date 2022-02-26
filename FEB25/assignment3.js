function missingNumber(arr, N)
{
    var cnt = 0;
    for (var i = arr[0]; i <= arr[N - 1]; i++) {
        if (arr[cnt] == i)
        {
         
            // Counter to increase the value for checking the next number
            cnt++;
        }
        else
        {
            // Printing the number which is missing and inserting the value via array push operation
            
            
            arr.push(i);
            console.log(arr);
        }
    }
}
var arr = [ 6, 7, 10, 11, 13 ];
var N = arr.length;
missingNumber(arr, N);
