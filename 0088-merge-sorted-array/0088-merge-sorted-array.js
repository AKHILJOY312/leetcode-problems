function nextGap(gap) {
    if (gap <= 1) return 0;
    return Math.ceil(gap / 2);
}

var merge = function(nums1, m, nums2, n) {

    if (n === 0) return;

    // Copy nums2 into nums1
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    let start = 0;
    let end = nums1.length - 1;

    let gap = nextGap(end - start + 1);

    while (gap > 0) {

        let i = start;
        let j = start + gap;

        while (j <= end) {

            if (nums1[i] > nums1[j]) {
                [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
            }

            i++;
            j++;
        }

        gap = nextGap(gap);
    }
};