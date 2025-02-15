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
