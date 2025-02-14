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
