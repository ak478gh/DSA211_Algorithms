let arr = [5, 6, 2, 4, 3, 9];
let n = arr.length;
for(let i=1;i<n;i++) {
    let temp = arr[i];
    let j = i-1;
    while(j>=0 && arr[j]>temp) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = temp;
}
console.log(arr);