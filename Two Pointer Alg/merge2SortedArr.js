let arr1 = [1,8,11,56];
let arr2 = [3,6,10,15,20];
let n1 = arr1.length;
let n2 = arr2.length;

// Merge Two Sorted Arrays:

let res = new Array(n1+n2)

let i=0, j=0, k=0;
while(i<n1 && j<n2) {
    if(arr1[i]>arr2[j]) {
        res[k] = arr2[j];
        j++, k++;
    } else {
        res[k] = arr1[i];
        i++, k++;
    }
    while(i<n1) {
        res[k]=arr1[i];
        i++, k++;
    }
    while(j<n2) {
        res[k]=arr2[j];
        j++, k++;
    }
}
console.log(res);