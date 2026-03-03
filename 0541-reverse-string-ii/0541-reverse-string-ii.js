/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr= s.split("");
    for(let start=0;start<arr.length;start+=2*k){
        let i=start,j=Math.min(start+k-1,arr.length-1);
        while(i<j){
            const temp = arr[i];
            arr[i++]=arr[j];
            arr[j--]=temp
        }
    }
    return arr.join("");
};