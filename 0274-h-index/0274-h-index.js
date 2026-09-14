/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    const n = citations.length;

    const buckets = new Array(n + 1).fill(0);

    // Build buckets
    for (const citation of citations) {
        if (citation >= n) {
            buckets[n]++;
        } else {
            buckets[citation]++;
        }
    }

    let papers = 0;

    for (let h = n; h >= 0; h--) {
        papers += buckets[h];

        if (papers >= h) {
            return h;
        }
    }

    return 0;
};