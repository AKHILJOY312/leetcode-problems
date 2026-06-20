/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    function inverseBinary(arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i]===0){
                arr[i]=1
            }else{
                arr[i]=0;
            }
        }
        return arr;
    }


    for(let i=0;i<image.length;i++){
        //sort
        //invert
        image[i]=inverseBinary(image[i].reverse());
    }
    return image;
};