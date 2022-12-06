let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
let n = arr.length;
let l=0;
let r = n-1;
let htw = 0;
let hlw = 0;
let jtw = 0;
let jlw = 0;

while(l<=r) {
    hlw = 0;
    while(hlw<=jlw && l<=r) {
        hlw += arr[l];
        l++;
    
    }
    htw += hlw
    
    jlw = 0;
    while(jlw <= hlw && l<=r) {
        jlw += arr[r];
        r--;
    }
    jtw += jlw
}

console.log(htw, jtw)