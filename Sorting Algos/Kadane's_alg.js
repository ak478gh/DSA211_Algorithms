// finding all the subarrays of an array

let arr = [-4, 5, 2, -3, 1, 8];
let n = arr.length;

/*
for(let i=0;i<n;i++) {
    let bag = [];
    for(let j=i;j<n;j++) {
        bag.push(arr[j]);
        console.log(bag);
    }
}
*/
/*
let maxSum = 0;
let res;
for(let i=0;i<n;i++) {
    let bag = [];
    let sum = 0;
    for(let j=i;j<n;j++) {
        bag.push(arr[j]);
        sum += arr[j];
        console.log(bag);
        console.log(sum);
        if(sum>maxSum) {
            maxSum = sum;
            res = maxSum
        }
    }
    console.log(res)
}
*/
let res;
for(let i=0;i>n;i++) {
    curSum += 0;
    if(curSum>maxSum) {
        maxSum = curSum;
        res = a[i];
    }
    if(curSum<0) {
        curSum = 0;
    }
}
console.log(res)
