/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let low=0;
    let high=letters.length;

    while(low<high){
        const mid = Math.floor((low+high)/2);
        if(letters[mid]<=target){
            low= mid+1;
        }else{
            high = mid;
        }
    }

    return letters[low%letters.length]

};