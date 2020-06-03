const prompt = require('prompt-sync')({sigint: true});

const num= prompt("Enter some numbers");

console.log('Your number + 4 =');

console.log(Number(num) + 4);

