class MinHeap1 {
    constructor() {
        this.heap = [];
    }

    getParent(i) { return Math.floor((i - 1) / 2); }
    getLeft(i) { return 2 * i + 1; }
    getRight(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[this.getParent(i)] > this.heap[i]) {
            this.swap(i, this.getParent(i));
            i = this.getParent(i);
        }
    }

    removeMin() {
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let i = 0;

        while (this.getLeft(i) < this.heap.length) {
            let smallest = this.getLeft(i);
            let right = this.getRight(i);

            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (this.heap[i] <= this.heap[smallest]) break;

            this.swap(i, smallest);
            i = smallest;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var KthLargest = function(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap1();

    for (let num of nums) {
        this.add(num);
    }
};

KthLargest.prototype.add = function(val) {
    this.minHeap.insert(val);

    if (this.minHeap.size() > this.k) {
        this.minHeap.removeMin();
    }

    return this.minHeap.peek();
};