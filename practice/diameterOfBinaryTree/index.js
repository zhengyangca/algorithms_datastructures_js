function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
let max;
var diameterOfBinaryTree = function (root) {
    max = 0;
    depth(root);
    return max;
};

const depth = (node) => {
    if (!node) {
        return 0;
    }
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);
    max = Math.max(max, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
}


// main
const array = [1, 2, 3, 4, 5];
const root = new TreeNode(array[0]);

root.left = new TreeNode(array[1]);
root.right = new TreeNode(array[2]);

root.left.left = new TreeNode(array[3]);
root.left.right = new TreeNode(array[4]);

const dbt = diameterOfBinaryTree(root);
console.log(root, dbt);
