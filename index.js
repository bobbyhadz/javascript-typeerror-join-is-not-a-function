// TypeError: join is not a function in JavaScript

// EXAMPLE 1 - Only call the `Array.join()` method on arrays

const arr = ['bobby', 'hadz', 'com'];

const result = arr.join(',');

// 👇️ "bobby,hadz,com"
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is an Array before calling `join()`

// const arr = null;

// const result = Array.isArray(arr) ? arr.join(',') : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a simple `if` statement

// const arr = null;

// let result = '';

// if (Array.isArray(arr)) {
//   result = arr.join(',');
// }

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert the value to an array before calling `join()`

// const set = new Set(['bobby', 'hadz', 'com']);

// const result = Array.from(set).join(',');
// console.log(result); // 👉️ "bobby,hadz,com"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Accessing a property with an array value before calling `join()`

// const obj = {
//   site: ['bobby', 'hadz', 'com'],
// };

// const result = obj.site.join(', ');
// console.log(result); // 👉️ bobby, hadz, com
