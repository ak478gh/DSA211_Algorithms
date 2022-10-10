let arr = [1, 3, 4, 6, 5];

function selectionSort(arr) {
    let n = arr.length;
    let count = 0;
    for(let i=0;i<n;i++) {
        let swapped = false;
        for(let j=0;j<n-i;j++) {
            if(arr[j]>arr[j+1]) {
                swapped = true;
                count++;
                swap(arr, j, j+1)
            }
        }
        if(swapped == false) {
            break;
        }
    }
    return arr;
}

console.log(selectionSort(arr));



// Swap Function:

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}