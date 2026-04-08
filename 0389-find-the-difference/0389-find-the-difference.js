/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sArr= s.split("").sort();
    let tArr= t.split("").sort();
    console.log(sArr,tArr)
    for(let i=0;i<tArr.length;i++){
        if(sArr[i] !== tArr[i]){
            return tArr[i];
        }
    }
    return ""
};