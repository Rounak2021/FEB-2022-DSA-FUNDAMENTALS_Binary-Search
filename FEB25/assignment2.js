// For the given array, use the binary search to find the target element z.
// Array = ["a", "b", "d", "e", "f", "g", "h", "i", "x", "z"]

// Creating a function to use while loop and necessary conditions.
function binarySearch(arr, numberToBeSearched) {
    let l = 0;   
    let u = arr.length - 1;  

    // Using while loop
    while(l <= u) {
        let mid = Math.floor(l + (u - l)/2);  // Mid is used to calculate the mid value of the indexes using the formula and Math.floor to round off the value to its floor value.
        if (arr[mid] === numberToBeSearched) {
            console.log("The target element is " + numberToBeSearched);
            return "The index of the target element of the array is " +l;    
        }
        if (arr[mid] < numberToBeSearched) {
            l = mid + 1;  //If the mid value of the array is lesser than the target value, then increase the mid value by 1 units
        } else {
            u = mid - 1;  //Else lesser the value by 1 units
        }
    }
    return "The target element could not be found.";  //Return a false value
}
array = ["a", "b", "d", "e", "f", "g", "h", "i", "x", "z"];
console.log( binarySearch(array, "z"));
