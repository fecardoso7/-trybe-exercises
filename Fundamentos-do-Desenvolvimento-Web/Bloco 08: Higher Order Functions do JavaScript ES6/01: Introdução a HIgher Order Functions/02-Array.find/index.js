const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(verifyNumbers); // 30