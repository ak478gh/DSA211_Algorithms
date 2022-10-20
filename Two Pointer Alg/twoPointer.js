
// Given an array and an integer k, find two numbers whose sum is equal to k.

let arr = [5, 10, 7, 3, 11, 8, 15];
let n = arr.length;
let k =100;

function tp(arr,n,k) {
    arr.sort(function(a,b){return(a-b)});
    let l=0; r=n-1;

    while(l<n && r>=0&&r!=l) {

        sum=arr[l]+arr[r]

        if(sum==k) {
            return true;
        } else if(sum<k) {
            l++;
        } else {
            r--;
        }
    }
    return false;
}

console.log(tp(arr,n,k));