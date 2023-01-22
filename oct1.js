/*Relax Days
Problem Statement
There is a teacher and you are given n number of days in an array arr.
 For a particular day arr[i] these are the possible chances
If arr[i]=0 then you can teach neither physics nor chemistry         //   0-nul  1-chem  2-phy   3-p/c  
If arr[i]=1 then you cannot teach physics but you can teach chemistry
If arr[i]=2 then you can teach physics but not chemistry
If arr[i]=3 then you can teach any one of the two subjects i.e you can teach either physics or chemistry
For the i-th day you can either teach physics(if arr[i]=2 or arr[i]=3) or
 you can teach chemistry (if arr[i]=1 or arr[i]=3) or you can
  relax(i.e teach neither physics nor chemistry and take rest)
Your task is to count and print the minimum number of days where you will
 relax(i.e teach neither physics nor chemistry and take rest).
Note that the teacher will also not teach the same subject on two consecutive days.

Constraints
1<=n<=10^5
0<=arr[i]<4

Input :
The first line contains n the number of days the next line contains all the n elements

output :
Print the minimum number of relax days

Sample Input 1 :
4
1 3 2 0
Sample Output 1 :
2
Sample Explanation 1 :
One of the optimal approaches to minimize the number of relax days in this test case could be:
On day 1 you can teach chemistry
On day 2 you can relax
On day 3 you can teach physics
On day 4 you can relax
So total relax days=2
Sample Input 2 :
7
1 3 3 2 1 2 3
Sample Output 2:
0
Sample Explanation 2 :
One of the optimal approaches to minimize the number of relax days in this test case could be:
On day 2,4,6 teach physics
On day 1,3,5,7 teach chemistry
So total relax days=0
*/

/*
function relaxDays(arr,n){
    // if(arr[i]=0)                                              // if arr.Has(0) then count 1
    // then relax           0-nul  1-chem  2-phy   3-p/c  
    // If( arr[i]=1)
    //  then you can teach chemistry
    // If (arr[i]=2)
    //  then you can teach physics but not chemistry
    // If (arr[i]=3)
    //  then you can teach  physics or chemistry
   let count = 0;
    for(let i=0; i<n;i++){
    if(arr[i] ==0 )
   count++;
    if(arr[i] == (1 || 2 || 3) )
        count--;
}
console.log(count);
     temp = arr.sort();
     console.log(temp);
}
let arr = [1 ,3 ,2 ,0]
//let arr = [1, 3, 3, 2, 1, 2, 3];
let n = 4;
relaxDays(arr,n);












*/


















//////////////////////////////////////////////////////////////////////////////


/**
 * GCD XY
GCD XY
Problem Statement
An array A, of X positive integers, is called “good” if the sum of all its elements is exactly Y, 
i.e., A1 + A2 + ….. + AX = Y.
Cost of an array C, is defined as Greatest Common Divisor of all its element. C = GCD (A1 , A2 , ….., AX ).
Find how many different values of C exists for “good” arrays of length X and sum Y and also 
find the maximum value of C among them.
You are given T independent test cases.
Constraints
1 <= T <= 10
1 <= X <= 105
1 <= X <= Y <= 109
All input values are integers.

Input Format
First-line contains T.
Next T lines each contains two space separated integers X and Y.

Output Format
Print in a newline for each test case two space separated integers denoting how many different values of C exists 
 for “good” arrays of length X and sum Y and also find the maximum value of C among them, respectively.
Sample Input 1
2
2 4
2 5
Sample Output 1
2 2
1 1

Explanation of Sample 1
For 1st test case, possible value of C = {1, 2}
We can get C = 1, if A = [3, 1]
We can get C = 2, if A = [2, 2]
For 2nd test case, we can only get C = 1,
One possible “good” array to get C =1, is A = [ 2, 3]
 * 
 */
// function gcdXY(x,y){

// }

// let arr = [5]
// for(let idx=0;idx<5;idx++){
//         console.log(arr[idx])
// }
// const oneTwoThree = [1, 2, 3]
// const sevenEightNine = [7, 8, 9]

// console.log([4, 5, 6, ...oneTwoThree, ...sevenEightNine]);
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['b', 'c', 'a'];

// console.log(
//   arr1.sort() === arr1,
//   arr2.sort() == arr2,
//   arr1.sort() === arr2.sort()
// );

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// arr1.concat(arr2);
// console.log(arr1);
//var a = []; 
// console.log(a.unshift(1));
// console.log(a.unshift(22));
// console.log(a.shift());
// console.log(a.unshift(3,[4,5]));
// console.log(a.shift());
// console.log(a.shift());
// console.log(a.shift());

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var myArr= array.filter(v => v % 3 === 0);

// console.log(myArr);
// var val = "JavaScraipt String"
// splittedVal = val.split('a',3)
// console.log(splittedVal);

// var values=["one","two","Three"];  
// var ans=values.shift();  
// console.log(ans);
var arr = [1,1,4,2,1,3];
let arr1 = arr.sort();
let n= arr.length;
let count = 0;
function expectedarray(arr,arr1,n){
  
//console.log(arr1);
  
 for(let i=0;i<n;i++){
  if(arr[i] != arr1[i])
  console.log(arr[i],arr1[i]);
   count++;
 }
  }
  

console.log(expectedarray(arr,arr1,n));