/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const n = citations.length;
    let answer=0;

    for(let h=0;h<=n;h++){
        let count=0;

        for(const c of citations){
            if(c>=h) count++;
        }

        if(count>=h){
            answer=h;
        }
    }
    return answer;
};