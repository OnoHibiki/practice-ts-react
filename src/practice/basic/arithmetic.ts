//四則演算です arithmetic.ts

const a: number = 10;
const b: number = 3;

const sum: number = a + b;
const diff: number = a - b;
const product: number = a * b;
const quotient: number = a / b;

console.log( sum, diff, product, quotient);
//下記のように書くと、変数名:その値　みたいに表示ができる
console.log({ sum, diff, product, quotient});


const remainder: number = a % b;
console.log({ remainder });

//const miss: number = a * "2";