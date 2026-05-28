var findLHS = function(nums) {
    const freq = new Map();

    for (const n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    let max = 0;

    for (const [n, count] of freq) {
        if (freq.has(n + 1)) {
            max = Math.max(max, count + freq.get(n + 1));
        }
    }

    return max;
};