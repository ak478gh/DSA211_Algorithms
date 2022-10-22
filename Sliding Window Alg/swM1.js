// Sliding Window Technique(Fixed Size):

// Find maximum sum sub-array.
// given
let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let n = arr.length;
let k = 4;

// Approach: Nieve
/*
let max = 0;
let res = '';
for(let i=0;i<n;i++) {
    let sum = 0;
    let bag = '';
    let count = 0;
    let check = false
    for(let j=i;j<n;j++) {
        bag+=arr[j]+' ';
        sum+=arr[j];
        count++;
        if(count==k) {
            // console.log(bag);
            // console.log(sum);
            if(sum>max) {
                max=sum;
                res = bag;
                check = true;
            }
            if(check==false) {
                break;
            }
            // console.log(bag)
        }
    }
}
console.log('result',res);
*/


// Approach: Sliding Window Technique

let sum = 0;let maxSum = 0;;
for(let i=0;i<n-k+1;i++) {
    let bag = ''
    for(let j=i;j<i+k;j++) {
        bag+=arr[j]+' ';
        sum+=arr[j];
    }
    console.log(bag);
    if(sum>maxSum) {
        maxSum = sum;
    }
}
