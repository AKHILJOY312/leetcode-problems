/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    const trie = new Trie();
    for (let ele of dictionary) {
        trie.insert(ele);
    }

const words= sentence.split(" ");
for(let i = 0;i<words.length;i++){
    words[i]= trie.findPrefix(words[i]);
}
return words.join(" ");
};



class TrieNode {
    constructor() {
        this.child = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(words) {
        let node = this.root;
        for (let char of words) {
            if (!node.child.has(char)) {
                node.child.set(char, new TrieNode());
            }
            node = node.child.get(char);
        }
        node.isEnd = true;
    }

    findPrefix(word) {
        let node = this.root;
        let prefix = "";
        for (let char of word) {
            if (!node.child.has(char)) return word;

            prefix += char;
            node = node.child.get(char);

            if (node.isEnd) return prefix;
        }
        return word;
    }
}