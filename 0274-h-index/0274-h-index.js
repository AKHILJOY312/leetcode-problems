/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>a-b);

    const lenghtOfPappers=citations.length;

    for(let i=0;i<lenghtOfPappers;i++){
        const pappers= lenghtOfPappers-i;

        if(citations[i]>=pappers){
            return pappers
        }
    }
    return 0;
};