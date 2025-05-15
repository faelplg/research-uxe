"use strict";
// manipulate arrays
// 1. Create an array of numbers
const numbers = [1, 2, 3, 4, 5];
// 2. Add a number to the end of the array
numbers.push(6);
// 3. Remove the first number from the array
numbers.shift();
// 4. Find the index of a number in the array
const index = numbers.indexOf(3);
// 5. Create a new array with the numbers multiplied by 2
const multipliedNumbers = numbers.map((number) => number * 2);
// 6. Filter the array to only include numbers greater than 5
const filteredNumbers = numbers.filter((number) => number > 5);
// 7. Sort the array in descending order
const sortedNumbers = numbers.sort((a, b) => b - a);
// 8. Reverse the array
const reversedNumbers = numbers.reverse();
// 9. Join the array into a string
const joinedNumbers = numbers.join(", ");
// 10. Check if a number is in the array
const containsNumber = numbers.includes(3);
// 11. Find the sum of all numbers in the array
const sum = numbers.reduce((acc, number) => acc + number, 0);
// 12. Find the maximum number in the array
const max = Math.max(...numbers);
// 13. Find the minimum number in the array
const min = Math.min(...numbers);
// 14. Create a new array with the square of each number
const squaredNumbers = numbers.map((number) => number ** 2);
// 15. Create a new array with the numbers in reverse order
const reversedNumbers2 = [...numbers].reverse();
// 16. Create a new array with the numbers sorted in ascending order
const sortedNumbers2 = [...numbers].sort((a, b) => a - b);
// 17. Create a new array with the numbers sorted in descending order
const sortedNumbers3 = [...numbers].sort((a, b) => b - a);
// 18. Create a new array with the numbers filtered to only include even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
