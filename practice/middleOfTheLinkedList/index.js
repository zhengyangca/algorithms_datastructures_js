/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let currentNode = head;
    let length = 0;
    let count = 0;

    // get length
    do {
        length++;
        currentNode = currentNode.next;
    }
    while (currentNode);

    // get middle items
    const midIndex = length % 2 === 0 ? length / 2 : Math.floor(length / 2);

    // get the middle node
    currentNode = head;
    while (count !== midIndex) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};


const array = [1, 2, 3, 4, 5];


/**
 * better solution
 * Go through List from root and store the nodes into an array. get the array item at length/2.
 */



// ### main ###
let head;
let node;
array.forEach((val, index) => {
    if (index === 0) {
        head = new ListNode(val);
        node = head;
    } else if (index != (array.length)) {
        node.next = new ListNode(val);
        node = node.next;
    }
});
const mid = middleNode(head);
console.log(mid);