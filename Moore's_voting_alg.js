let arr = [5, 4, 1, 1, 1, 4, 4];
let n = arr.length;
let max = 0;
let res;

// Approach-1 (Brute Force) TC- N Sq.
/*
let arr = [5, 1, 4, 5, 5, 1, 1];
let n = arr.length;
let max = 0;
let res;

for(let i=0;i<n;i++) {
	let count = 0;
	for(let j=0;j<n;j++) {
		if(arr[i]==arr[j]) {
			count++;
		}
	}
	if(count>max) {
		max = count;
		res = arr[i];
	}
}
console.log(res);
*/ 
// Approach-2 (Brute Force) TC- NlogN Sq.
/*
arr.sort();
console.log(arr);
let count = 1;
for(let i=0;i<n;i++) {
	if(arr[i]==arr[i+1]) {
		count++;
	} else{
		if(count>max) { //if you want the letest value, check for the equality as well.
			max = count;
			res = arr[i];
			count = 1;
		}
	}
}
console.log(res);
*/

// Approach-2 (Brute Force) TC- NlogN Sq.
// arr = [5, 4, 1, 1, 1, 4, 4];
 
let count = 0;
let candidate;
for(let i=0;i<n;i++) {
	if(count == 0) {
		candidate = arr[i];
	}
	if(arr[i] == candidate) {
		count++;
	} else {
		count--;
	}
}

console.log(candidate);