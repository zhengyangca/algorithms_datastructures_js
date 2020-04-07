function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function (root) {
    let boundary = [];
    if (!root) {
        return boundary;
    }

    let node = root;
    let leftBoundary = [root];
    let rightBoundary = [root];
    let leaves = [];

    // find left boundary
    while (node.left || (node !== root) && (node.right)) {
        if (node.left) {
            leftBoundary.push(node.left);
            node = node.left;
        } else {
            leftBoundary.push(node.right);
            node = node.right;
        }
    }

    // find right boundary
    node = root;
    while (node.right || (node !== root) && (node.left)) {
        if (node.right) {
            rightBoundary.push(node.right);
            node = node.right;
        } else { // only left node
            rightBoundary.push(node.left);
            node = node.left;
        }
    }
    rightBoundary.reverse();

    // find leaves
    findLeafNodes(root, leaves);

    // form output
    boundary = [...leftBoundary, ...leaves, ...rightBoundary];
    // remove duplicates
    boundary = new Set(boundary);
    boundary = Array.from(boundary);

    let boundaryNums = [];
    boundary.forEach(node => {
        boundaryNums.push(node.val);
    });

    return boundaryNums;
};

const findLeafNodes = (node, leaves = []) => {
    if (!node) {
        return;
    }

    if ((!node.left) && (!node.right)) {
        leaves.push(node);
    }
    findLeafNodes(node.left, leaves);
    findLeafNodes(node.right, leaves);
};


// testing cases =========

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

// root.left.left = new TreeNode(4);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(5);

root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);

// root.right.left.left = new TreeNode(9);
// root.right.left.right = new TreeNode(10);


const boundary = boundaryOfBinaryTree(root);

console.log(boundary);
