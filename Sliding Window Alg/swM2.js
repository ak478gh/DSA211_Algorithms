// Sliding Window Technique(Given Size):

// Find is there any sub-array wit given sum[return True/False]

// Solution:

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let n = arr.length;
let sum = 27;

function solution(n,sum,arr) {
    let j=0;
    let windowSum = 0;
    for(let i=0;i<n;i++) {
        while(windowSum<sum && j<n) {
            windowSum+=arr[j];
            j++;
        }
        if(windowSum==sum) {
            return true;
        }
        windowSum-=arr[i];
    }
    return false;
}

console.log(solution(n,sum,arr));
