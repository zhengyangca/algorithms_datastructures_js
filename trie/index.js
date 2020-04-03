var TrieNode = function (value) {
    this.value = value;
    this.parent = null;
    this.children = {};
    this.end = false;

    this.getWord = () => {
        const output = [];
        var node = this;
    
        while (node !== null) {
            output.unshift(node.value);
            node = node.parent;
        }
    
        return output.join('');
    };
};

var Trie = function () {
    this.root = new TrieNode(null);
};

Trie.prototype.insert = function (word) {
    let node = this.root;
    for (i = 0; i < word.length; i++) {
        // add new char to trie as a node
        if (!node.children[word[i]]) {
            node.children[word[i]] = new TrieNode(word[i]);
            node.children[word[i]].parent = node;
        }

        // proceed into the next depth if node exist
        node = node.children[word[i]];

        if (i === word.length - 1) {
            node.end = true;
        }
    }
};

Trie.prototype.search = function (word) {
    let node = this.root;
    for (i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
            node = node.children[word[i]];
        } else {
            return false;
        };
    }
    return node.end;
};

Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    let output = [];

    for (i = 0; i < prefix.length; i++) {
        if (node.children[prefix[i]]) {
            node = node.children[prefix[i]];
        } else {
            return output; // []
        }
    }

    // node = the last char of the prefix.
    findAllWords(node, output);

    return output;
};

const findAllWords = (node, array) => {
    if (node.end) {
        const currrentWord = node.getWord();
        array.push(currrentWord);;
    }
    for (let child in node.children) {  // this child is the key of javascript object, which is like a hashmap
        findAllWords(node.children[child], array);
    }
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert('zheng')
obj.insert('zhenee')
obj.insert('yang')
// var param_2 = obj.search('zhe')
var param_3 = obj.startsWith('zhe')
console.log(param_3);
