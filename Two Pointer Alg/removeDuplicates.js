// Given an array of integers and you need to remove the duplicate elements present.

let arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5];
let n = arr.length;

// Approach: Nieve

// for(let i=0;i<n;i++) {
//     for(let j=i+1;j<n;j++) {
//         if(arr[i]!=arr[j]) {
//             arr[i]=arr[j];
//         }
//     }
// }

// Approach: Optimised {T.C = O(N) and S.C = O(N)}
function remove(arr,n) {
    let res = [];
    let i=0;j=0;
    while(i<n) {
        if(arr[i]!=arr[i+1]) {
            res[j]=arr[i];
            j++;
            i++;
        } else {
            i++;
        }
    }
    return res;
}

console.log(remove(arr,n))