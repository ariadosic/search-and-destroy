'use strict';
//Complete this algo
const isLoop = (linkedlist) => {
    let runner1 = linkedlist.head.next
    let runner2 = linkedlist.head.next.next

    while(runner2.next !== null && runner2.next.next !== null){
        console.log("hit")
        if(runner1 === runner2){
            return [true, runner2.value];
        }
        runner1 = runner1.next
        runner2 = runner2.next.next
    }
    return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/

function findLoop(linkedList){
    const loopCondition = isLoop(linkedList)
    if(loopCondition){
        let runner1 = linkedList.head
        let currentNode = linkedList.head
        while(true){
            if(currentNode.value === loopCondition[1]){
                break
            }
            currentNode = currentNode.next
        }
       

        let runner2 = currentNode
        console.log(loopCondition)
        while(runner1.value !== runner2.value){
            runner1 = runner1.next
            runner2 = runner2.next
        }
        return runner1.value
    }

}


module.exports = {isLoop, findLoop}