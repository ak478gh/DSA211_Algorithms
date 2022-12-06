/*
Description:
Hassan has discovered his sorting algorithm. The algorithm has following conditions.
1. Given an integer k, sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.
Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.
*/
var arr = [12, 18, 17, 65, 46];
var n = arr.length;
var k = 6;


function myFunc(n, k, arr) {
    
    for(let i=0;i<n-1;i++) {
        let tag = false;
        for(let j=0;j<n-1-i;j++) {
            if(arr[j]%k>arr[j+1]%k) {
                tag = true;
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(!tag) {
            break;
        }
    }
    console.log(arr.join(' '));
}

myFunc(n, k, arr);

// Explaination:
/*
12%6=0

18%6=0

17%6=5

65%6=5

46%6=4

So, the sorted order is: 12 18 46 17 65
*/