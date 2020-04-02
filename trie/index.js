/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.words = [];
    for(i = 0; i < 30; i++) {
        this.words[i] = [];
    }
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let stringCode = 0;
    for(i = 0; i < word.length ; i ++) {
        stringCode += word.charCodeAt(i);
    }
    const hashValue = stringCode%30;
    this.words[hashValue].push(word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let stringCode = 0;
    for(i = 0; i < word.length; i++) {
        stringCode += word.charCodeAt(i);
    }
    const hashValue = stringCode%30;
    for(let element of this.words[hashValue]) {
        if(word === element) {
            console.log(this.words);
            console.log(`found ${word} at position ${hashValue}`);
            return true;
        }
    }
    console.log(`${word} not found!`);
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 const trie = new Trie();
 trie.insert('hello world');
 trie.insert('message monkey');
 trie.insert('ad');
 trie.insert('bc');

 trie.search('ad');