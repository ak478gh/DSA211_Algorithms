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
        let swapped = false;
        for(let j=0;j<n-1-i;j++) {
            if(arr[j]>arr[j+1]) {
                swapped = true;
                swap(arr,j+1,j)
            }
        }
        if(!swapped) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort(n,arr));