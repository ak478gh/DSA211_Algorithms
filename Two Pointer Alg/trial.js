function fun(arr,n) {
    let j=0;
    for(let i=0;i<n;i++) {
        if(arr[i]!=arr[i+1]) {
            arr[j]=arr[i]
            j++;
        }
    }
    arr[j] = arr[n-1]
    return j;
}
let arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5];
let n = arr.length;


console.log(fun(arr,n))
