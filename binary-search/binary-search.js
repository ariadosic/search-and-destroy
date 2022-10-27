'use strict';

// Complete this algo
const binarySearch = (arr, x) => {
	// while(array.length > 0){
	// 	const root = Math.floor((array.length - 1) / 2)
	// 	console.log(array, "root is: ", root)
	// 	if(target < array[root]){
	// 		const leftHalf = array.slice(0, root)
	// 		array = leftHalf
	// 	} else if (target > array[root]) {
	// 		const rightHalf = array.slice(root + 1)
	// 		array = rightHalf
	// 	} else {
	// 		return true;
	// 	}
	// }

	// return false


	// let leftPointer = 0
	// let rightPointer = array.length - 1

	// while(true){
	// 	const root = leftPointer + Math.floor((rightPointer - leftPointer) / 2)
	// 	console.log("L", leftPointer, "R", rightPointer, "RT", root)
	// 	if (array[root] === target || array[root - 1] === target || array[root + 1] === target){
	// 		return true;
	// 	} else if (rightPointer - leftPointer === 1){
	// 		break;
	// 	} else if (target < array[root]){
	// 		rightPointer = root
	// 	} else if (target > array[root]) {
	// 		leftPointer = root
	// 	} 
	// }
	// console.log("BROKE")
	// return false

	let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch