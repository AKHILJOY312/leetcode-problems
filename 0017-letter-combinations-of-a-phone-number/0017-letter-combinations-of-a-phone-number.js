/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   const phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
const res=[];
    function backTracking(index,current){
        //base case
        if(index===digits.length){
            res.push(current);
            return
        }

        //take the letter out 
        let letters= phone[digits[index]];
        for(let ch of letters){
            backTracking(index+1,current+ch);
        }
    }

    backTracking(0,[]);
    return res;
};