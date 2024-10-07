// questtion-1: 
const numbers1 = [2, 3, 4, 5];
const squares = numbers1.map(num => num * num);
console.log('Squares:', squares); 

// questtion-2: 
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log('Even Numbers:', evens); 

// questtion-3: 
const numbers3 = [5, 10, 15, 20];
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum:', sum); 

// questtion-4: 
const numbers4 = [1, 2, 3, 4, 5];
const sumOfSquares = numbers4
    .filter(num => num % 2 === 0)  
    .map(num => num * num)         
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log('Sum of Squares of Even Numbers:', sumOfSquares); 