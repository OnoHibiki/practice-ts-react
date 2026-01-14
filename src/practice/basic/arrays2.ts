//Reactっぽい

type User = {
    id: number;
    name: string;
};

const users: User[] = [
    { id: 1, name:"Hibiki"},
    { id: 2, name: "Taro"},
];

const userName = users.map( user => user.name);
console.log(userName);


//taxを10%かけた新配列を作る
const tax: number = 1.1;
const prices = [100, 200, 300];

const prices2 = prices.map(n => n * tax);
console.log(prices2);

//四捨五入ver
const prices3 = prices.map(n => Math.round(n * tax));
console.log(prices3);

