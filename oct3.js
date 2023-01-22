///////////////OCTOBER 3 QUESTIONS/////////////////////////////
/*
Stones and Jewels
Let us say you work in a jewellery company where your task is to record all the jewellery items that
 came out from piles of stones.
For example, from a given pile of stones, for the sake of convenience we say 40 units, 
consists of 33 units of other metals and 7 units of metals which can be used to make jewellery. 
So, you record 7 units of jewellery from 40 units of stones.
Here you will be given string jewels representing the types of stones that are used to make jewellery, 
and second string as stones representing the stones we received. Each character in the given 
stones string will represent a type of stone either useful for making jewellery or other 
type of metal which are not useful to make jewellery. We want to know how many of the stones 
we have are kind of stones which can be used to make jewellery.
For our convenience we have made alphabetical symbols to represent both stones and jewels,
 i.e., a-z and A-Z.
Note: "a" is considered a different type of stone from "A".
Example 1:
Input: jewels = "bB", stones = "bbbbaAA"
Output: 4
Example 2:
Input: jewels = "v", stones = "VV"
Output: 0
Constraints:
1 <= length of jewels and stones string length <= 50
jewels and stones’ strings consist of only English letters.
All the characters in jewels’ string are unique.
Approach: 
While iterating over each stone from stones’ string, we will be checking if the given character
 which represents a stone can be used to make jewellery or not.
We need to have a data structure here which can confirm us if the given stone is a jewel or not 
with searching time complexity of O(1) to reduce time complexity.
We will be using a JS object here, with keys as jewels’ stone characters as they are unique with a
 value as true. So when we access any value with a stone character from this DS it will either return
  true or undefined i.e., considered as false.
For, valid condition we will increase the counter counting number of jewels.
Return the counter
*/
///////////////////////////

/*
Valid Parentheses Sequence

JSON object stands for JavaScript Object Notation, which is basically a JS object converted into 
a single string of data which is widely used for communication between REST web services and it's 
also easy to interpret by human as well as machine.
JSON Objects always have valid parentheses sequence which is often necessary to read data
 from a json string.
These are rules we must follow to decide a valid parentheses sequence such as:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Our goal is to identify if the given string has a valid parentheses sequence, by verifying the above
 two conditions. For the sake of convenience all the text and other symbols are erased and the input 
 string just contains the brackets like '(', ')', '{', '}', '[' and ']. Write a function to determine
  if the input string is a valid parentheses sequence or not.

Example 1:
Input: s = "()()"
Output: true

Example 2:
Input: s = "[]{}()"
Output: true

Example 3:
Input: s = " {[}(])"
Output: false

Constraints:
1 <= length of input array <= 104
Input string consists of parentheses only '()[]{}'.

Approach: First, we will be needing a data structure here to store brackets combinations and to 
reduce time complexity we will use a JS object with O(1) search complexity.
We will be verifying a valid string using a stack and its concept of push and pop.
When an open bracket is read we will push it in the stack and When a close bracket is read we will pop.
Now to validate the orders the stack will itself help us as the last opened bracket should be closed 
first i.e., it should be at the top of the stack, if this does not happen we can confirm that the 
string is not a valid JSON object.
And finally if the stack is not empty we can also confirm that the string is not a valid JSON object.


Code in your favorite IDE and paste in the above widget

*/


//////////////////////////////
/*
Another Number System

We are introduced with a new number system where
A represents as 1
B represents as 2
C represents as 3

...
Z represents as 26
AA represents as 27
AB represents as 28
...
Let’s call this system the ALPHA numeric system. And our goal here is to convert the number
 given in ALPHA numeric form to the DECIMAL number system.

Example 1:
Input: "AA"
Output: 27

Example 2:
Input: "ABC"
Output: 731

Example 3:
Input: "J"
Output: 10

Constraints:
1 <=input string length <= 7
Input string consists only of uppercase English letters.
Input string is in the range ["A", "FXSHRXW"].

Approach:
Like in DECIMAL number system when we see 143, we say that it is 1 hundred 40 tens and 3,
 i.e., 1 x 10*2 + 4 x 10*1 + 3 x 10*0 = 143.
We will be implementing the same logic here as well, all we have to do is replace 10 with 26, 
which is our new base of the number system here.
Calculate the unitVal: power of 26 at that position
And the currentIndexValue: value of the current letter, e.g. 11 for K
Apply the above formula
And return the decimal value

*/
//////////////////////////////
/*
String Strength

Let us assume there is a new logic defined to determine strength of a word, which is a
 longest possible substring of the word that only has unique characters in it. 
For example, the word ‘random’ has a strength of 100%, which is derived on the logic that 
it has all unique characters in it, so length of the longest substring with unique characters /
 length of the word (input string) in percentage will give us 100.
We will be given with a string s, find the strength of the string by determining length 
of the longest substring without repeating characters.
Example 1:
Input: s = "abytffcde"
Output: 55.55
Explanation: The answer is "abytf", so the string strength here is 55.55%.
Example 2:
Input: s = "cccc"
Output: 25
Explanation: The answer is "c", so the string strength here is 25%.
Example 2:
Input: s = "pwwkew"
Output: 50
Explanation: The answer is "wke",so the string strength here is 50%.
Note: The answer must be a substring, "pwke" is a subsequence and not a substring.
Constraints:
0 <= input string length <= 5 * 104 
Input string consists of English letters, digits, symbols and spaces.
Approach:
We're going to use something called the sliding window approach.
Our sliding window will represent the current substring of non-repeating characters that we are on.
We will be working with a sliding window of variable size.
Our window will grow or shrink in size as we iterate through the string.
We will create a for loop representing the end of the window.
We will create a WindowsCharsMap that will store characters and its index values as key value pairs.
At every iteration we will check for the windowStart that will track the window start position and
 also the size of that window.
When (windowsCharsMap[character at ith pos] >= windowStart) 
Then, windowStart = windowsCharsMap[endChar] + 1, which is the index of the character last appeared 
in the input string plus one to update window size.
We will be also updating the maxLength, which is storing the max length of substring with unique
 characters      
maxLength = maximum of maxLength or index position of current char - windowStart + 1
Return the percentage of maxLength / input string length.
*/