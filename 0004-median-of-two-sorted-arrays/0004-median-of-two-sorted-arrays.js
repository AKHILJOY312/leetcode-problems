function isEven(n) {
    return n % 2 === 0; // Simplified
}

var findMedianSortedArrays = function (nums1, nums2) {
    let comp = [...nums1, ...nums2];
    comp.sort((a, b) => a - b);
    
    const mid = Math.floor(comp.length / 2);

    if (isEven(comp.length)) {
        // Average of the two middle elements
        return (comp[mid - 1] + comp[mid]) / 2;
    } else {
        // The exact middle element
        return comp[mid];
    }
};