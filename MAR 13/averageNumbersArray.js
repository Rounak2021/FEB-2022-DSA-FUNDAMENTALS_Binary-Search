//Calculate the avg of elements of an array using recursive code.

let A = [1,6,6,8,4];
let N = A.length;
function averageNumber(A, N)
    {
        if (N == 1)
            return A[N - 1];
        else
            return ((averageNumber(A, N - 1) * (N - 1) + A[N - 1]) / N); //To find the average of all the numbers preent in an array
    }
    console.log("The average of " +N+ " numbers is " +averageNumber(A, N));