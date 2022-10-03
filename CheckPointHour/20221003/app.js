/* pseudo-code
1. find the length of the array
2. use array.reduce to create new array
3. loop through the array, cumulative sum
*/

var runningSum = function(nums) {
    const arrayLength = nums.length;
    let arrayFinal = [];

    // #1 reduce method
    // nums.reduce((prev,curr) => {
    //     arrayFinal.push(prev + curr)
    //     return prev+curr
    // },0);

    // #2 brute force
    let temp = 0;
    for(let i=0; i<arrayLength; i++){
        arrayFinal[i] = temp + nums[i];
        temp = temp + nums[i];
    }
    
    return arrayFinal;
};

let array = [1,2,3,4];
let array2 = [1,1,1,1,1];
console.log(runningSum(array))
console.log(runningSum(array2))