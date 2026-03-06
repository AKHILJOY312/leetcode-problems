class TrieNode {
    constructor() {
        this.children = {};
        this.sum = 0;
    }
}

class MapSum {
    constructor() {
        this.root = new TrieNode();
        this.map = new Map(); // key -> value
    }

    insert(key, val) {
        const oldVal = this.map.get(key) || 0;
        const diff = val - oldVal;

        this.map.set(key, val);

        let node = this.root;

        for (const ch of key) {
            if (!node.children[ch]) {
                node.children[ch]=new TrieNode();
            }

            node = node.children[ch];
            node.sum += diff;
        }
    }

    sum(prefix) {
        let node = this.root;
        for (const ch of prefix) {
            if (!node.children[ch]) return 0;
            node = node.children[ch];
        }
        return node.sum;
    }
}