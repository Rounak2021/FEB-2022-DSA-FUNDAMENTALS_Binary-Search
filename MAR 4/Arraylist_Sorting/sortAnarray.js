/**
 * @param {number[]} nums
 * @return {number[]}
 */
    const merge= (arr1,arr2)=>{
    let result =[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr1.length){
        result.push(arr1[i]);
        j++;
}
    return result;
};

//Leetcode solution: https://leetcode.com/problems/sort-an-array/submissions/