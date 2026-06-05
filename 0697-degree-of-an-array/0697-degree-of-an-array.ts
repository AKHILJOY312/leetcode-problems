function findShortestSubArray(nums: number[]): number {

    interface NumInfo {
        count: number;
        startI: number;
        endI: number;
    }

    const map = new Map<number, NumInfo>();

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
    let degree = 0;

    for (const info of map.values()) {
        degree = Math.max(degree, info.count);
    }
    
    let minLen = Infinity;

    for (const info of map.values()) {
        if (info.count === degree) {
            const len = info.endI - info.startI + 1;
            minLen = Math.min(minLen, len);
        }
    }

    return minLen;
};