const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, n) =>{
    return total + n;
}, 0);

console.log(sum);

const sum2 = numbers.reduce((total, n) => total + n, 0);
console.log(sum2);


const prices = [100, 200, 300, 400];

const total = prices
    .filter(price => price >= 300)
    .reduce((sum, price) => sum + price, 0);

console.log(total);


//カートの中身的な
type Item = {
    name: string;
    price: number;
};

const items : Item[] = [
    {name: "Apple", price: 100},
    {name: "Orange", price: 200},
    {name: "Banana", price: 150},
];

const totalPrice = items.reduce(
    (sum, item) => sum + item.price,
    0
);

console.log(totalPrice);



const q = [100, 200, 300, 400];
const qa = q.reduce((q, n) => q + n, 0);
console.log(qa);