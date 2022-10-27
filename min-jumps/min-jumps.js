'use strict';

// Complete this algo
const minJumps = arr => {
    let position = 0 //index
    let array = []
    let jumpCount = 0

    while(position < arr.length - 1){
        const jumpNumber = arr[position] //actual value
        if(position + jumpNumber >= arr.length - 1){
            return ++jumpCount
        }
        
        for(let i = 1; i <= jumpNumber; i++){
            array.push(arr[position + i]) //actual value
        }
        let maxValue = Math.max(...array)
        let jump = array.indexOf(maxValue) + 1
        array = [];
        position += jump 
       
        jumpCount++
    }
    return jumpCount
};

module.exports = minJumps