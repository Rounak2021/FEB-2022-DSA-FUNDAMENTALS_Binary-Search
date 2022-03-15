//Write a recursive code for finding the max and min element in the given array
//Given Array= [1,-1,0,2,-2,3,-3,4,-4 ]

let A = [1,-1,0,2,-2,3,-3,4,-4 ];
let n = A.length;
//Function to find the  minimum 
function minimum(A, n)
{
    if (n == 1)
        return A[0];
         
    return Math.min(A[n - 1],
        minimum(A, n - 1));
}
console.log(minimum(A, n));

//Function to find the maximum
function maximum(A, n)
{
    if (n == 1)
        return A[0];
     
    return Math.max(A[n - 1],
        maximum(A, n - 1));
}
console.log(maximum(A, n));