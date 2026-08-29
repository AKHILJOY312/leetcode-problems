/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => a - b);

    const lengthOfPappers = citations.length;

    for (let i = 0; i < lengthOfPappers; i++) {
        const papers = lengthOfPappers - i;

        if (citations[i] >= papers) return papers
    }

    return 0;
};