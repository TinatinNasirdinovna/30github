// leetcode tasks

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// var twoSum = function (nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//       for(let j = i+1; j < nums.length; j++){
//           if(nums[i] + nums[j] === target) {
//               return [i, j]
//           }
//       }
//     }
//   };

// ?  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// var isValid = function(s) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if (map[char]) {
//             stack.push(char);
//         }
//         else {
//             let last = stack.pop();
//             if (map[last] !== char) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };

// ? Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// const groupAnagrams = function (strs) {
//     let groups = {}
//     strs.forEach(el => {
//       let key  = el.split("").sort().join()
//       if(!groups[key]) {
//           groups[key] = []
//       }
//       groups[key].push(el)
//     })
//     return Object.values(groups)
//   };

// ? Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// const majorityElement = function (nums) {
//     nums.sort()
//    return nums[Math.floor(nums.length / 2)]
//  };

// ? Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// const isValid = function (s) {
//   let stack = [];
//   let map = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (map[char]) {
//       stack.push(char);
//     } else {
//       let last = stack.pop();
//       if (map[last] !== char) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// ? Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array.

// Return the minimum number of patches required.

// const minPatches = function (nums, n) {
//     let miss = 1;
//     let result = 0;
//     let i = 0;

//     while (miss <= n) {
//         if (i < nums.length && nums[i] <= miss) {
//             miss += nums[i];
//             i++;
//         } else {
//             miss += miss;
//             result++;
//         }
//     }

//     return result;
// };

// ?

// let nam = "Tinatin";
// let res = "";
// for (let i = 0; i < nam.length; i++) {
//   res += nam[i] + "-";
// }
// console.log(res);

// ?
// Напишите программу JavaScript, которая принимает строку в качестве входных данных и
//  меняет регистр каждого символа. Например, если вы вводите «The Quick Brown Fox»,
// то на выходе должно быть «tHE QUICK BROWN FOX».

// function task(str) {
//   return str
//     .split("")
//     .map((el) =>
//       el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
//     )
//     .join("");
// }

// console.log(task("The Quick Brown Fox"));
