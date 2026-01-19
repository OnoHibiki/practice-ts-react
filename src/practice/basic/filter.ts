//filter
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(n => n % 2 === 0);

console.log(evens);

//string配列 * filter
const names = ["Hibiki", "Taro", "Hanako"];

const hName = names.filter(n => n.startsWith("H"));
const anoterName = names.filter(n => !(n.startsWith("H")));
console.log(hName);
console.log(anoterName);


//オブジェクト配列 * filter
type User = {
    id: number;
    name: string;
    isActive: boolean;
};

const users: User[] = [
    { id: 1, name: "Hibiki", isActive: true },
    { id: 2, name: "Taro", isActive: false },
    { id: 3, name: "Hanako", isActive: true },
];

const activeUsers = users.filter(n => n.isActive);
console.log(activeUsers);