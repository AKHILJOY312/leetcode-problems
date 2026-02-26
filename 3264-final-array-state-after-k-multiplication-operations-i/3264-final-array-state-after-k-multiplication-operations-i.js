var getFinalState = function (nums, k, multiplier) {

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        smaller(a, b) {
            if (a[0] !== b[0]) return a[0] < b[0];
            return a[1] < b[1];
        }

        push(node) {
            this.heap.push(node);
            this.bubbleUp();
        }

        bubbleUp() {
            let i = this.heap.length - 1;
            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);
                if (this.smaller(this.heap[parent], this.heap[i])) break;
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown();
            return top;
        }

        bubbleDown() {
            let i = 0;
            const n = this.heap.length;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < n && this.smaller(this.heap[left], this.heap[smallest])) {
                    smallest = left;
                }
                if (right < n && this.smaller(this.heap[right], this.heap[smallest])) {
                    smallest = right;
                }
                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }
    }

    if (multiplier === 1) return nums;

    const heap = new MinHeap();

    for (let i = 0; i < nums.length; i++) {
        heap.push([nums[i], i]);
    }

    while (k > 0) {
        let [value, index] = heap.pop();
        value *= multiplier;
        nums[index] = value;
        heap.push([value, index]);
        k--;
    }

    return nums;
};