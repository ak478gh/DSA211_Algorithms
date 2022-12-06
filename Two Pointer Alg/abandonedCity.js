let arr = [1,2,3,4,5];
let n = arr.length;
let k = 7;

let i = 0;
let j = 0;
let poss_min = 0;
let min = Infinity;
let window_sum = 0;
let sum = 0;
for(i=0;i<n;i++) {
    sum+=arr[i]
}   
if(sum<k) {console.log(-1)}

for(let j=0;j<n;j++) {
    window_sum+=arr[j];
    while(window_sum>=k) {

        poss_min = j-i+1;
        min = Math.min(min,poss_min)
        window_sum-=arr[i];
        i++;

    }
}