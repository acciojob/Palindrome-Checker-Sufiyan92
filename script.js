// complete the given function

function palindrome(str){
let x = str.toLowerCase();
for(let i=0 ; i<x.length/2 ;i++ ){
    if(x[i]!=x[x.length-i-1]){
        return false;
    }
}
return true;
}
module.exports = palindrome
