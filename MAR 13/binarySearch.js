//Write a recursive binary search.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];
//Creating a function
function binarySearch(arr, searchNumb) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var newArr = arr;
    console.log(arr);
    console.log("array midpoint value: " + arr[midPoint]);

    //Conditional statements
    if (arr[midPoint] > searchNumb) {
        var newArr = arr.slice(0, arr[midPoint]);
        return binarySearch(newArr, searchNumb);
    } else if (arr[midPoint] < searchNumb) {

        var newArr = arr.slice(midPoint, arr.length);
        return binarySearch(newArr, searchNumb);
    } else {
        console.log("Binary Search performed succesfully");
    }
}