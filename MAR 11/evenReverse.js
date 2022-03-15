//Write a head recursion code to print only EVEN elements in decreasing order starting from user-defined input N.

function PrintReverseOrder(N)
    {
        for (let i = N; i >= 1; i--)
        if (i%2==0){
            console.log(i + " ");
        }
 
    }
    let N = 76;
    PrintReverseOrder(N);
    