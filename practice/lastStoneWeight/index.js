var Heap = require("collections/heap");

/**
 * @param {number[]} stones
 * @return {number}
 */
let last;
var lastStoneWeight = function (stones) {
    let heap = new Heap(stones);
    destroyStone(heap);
    return last;
};

const destroyStone = (heap) => {
    if (heap.length <= 1) {
        last = heap.peek();
        return last;
    }

    const heaviest = heap.peek();
    heap.pop();
    const secondHeaviest = heap.peek();

    if (heaviest !== secondHeaviest) {
        heap.push(heaviest - secondHeaviest);
    }
    destroyStone(heap);
    return last;
}

// main
const stones = [2, 7, 4, 1, 8, 1];

const lastStone = lastStoneWeight(stones);
console.log(lastStone);
