// Swap Function:

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1, 3, 4, 6, 5];
let n = arr.length;

function bubbleSort(n,arr) {
    for(let i=0;i<n-1;i++) {
        for(let j=0;j<n-1-i;j++) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(n,arr));