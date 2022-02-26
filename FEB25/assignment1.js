    // Find the frequency of an element where duplicates are present. Here Target is equal to 6.
    
    // Function to use the for loop and conditions
    function numFrequency(array,a,target)
     {
         var l = 0;  //This will initialise the counter
         for (var i=0; i<a; i++)
         {
             if (target == array[i]) // To check the target value is present in the length of array or not.
                 l++;  //Increase the counter by 1
         }
         return l;
     }
      
    // Input array
     array=[1,1,2,2,4,5,5,6,6,6,6,9,10,11]
     var  a = array.length; //Storing the length of the array in a variable called c
     var target = 6;  // Here we can input the target value to be searched.
     console.log( "The frequency of the chosen element is " + numFrequency(array, a, target)); 
      
