/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length==0)return true;
    let i=0;
    for(let char of t){

        if(char === s[i]){
            i++;
           if (i === s.length) return true;
        }
    }
    return false;
};