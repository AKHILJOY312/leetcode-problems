function findShortestSubArray(nums: number[]): number {
    //initialy a map
    interface NumInfo {
        count: number;
        startI: number;
        endI: number;
    }

    const map = new Map<number, NumInfo>();
    //make a index for the array to track the numbers
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!map.has(num)) {
            map.set(num, { count: 1, startI: i, endI: i });
        } else {
            const info = map.get(num)!;
            info.count++;
            info.endI = i;
        }
    }
    //find the one with the hightest degree;
    let degree = 0;

    for (const info of map.values()) {
        degree = Math.max(degree, info.count);
    }
    //separtat and find the the numbers with min length;
    let minLen = Infinity;

    for (const info of map.values()) {
        if (info.count === degree) {
            const len = info.endI - info.startI + 1;
            minLen = Math.min(minLen, len);
        }
    }

    return minLen;
};