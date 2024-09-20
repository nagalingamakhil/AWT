<html>
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let thriceNumbers = numbers.map(num => num * 3);
console.log("Thrice of each element:", thriceNumbers);

let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);
</html>