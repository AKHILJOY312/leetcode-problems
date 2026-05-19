/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const isUpperCase=(char)=>char===char.toUpperCase();
    let countUpper=0;
    for(let char of word){
        if(isUpperCase(char)){
            countUpper++;
        }
    }

    return (countUpper===word.length || countUpper===0 || (countUpper===1 && word[0]===word[0].toUpperCase()))
};