//配列とmap

const numbers: number[] = [1,2,3,4];

const names: string[] = ["Hibik","Taro","Hanako"];

console.log(numbers);
console.log(names);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//-------map------
const doubled = numbers.map((n) => {
    return n * 2;
});

console.log(doubled);
console.log(numbers);//mapは、元の配列を変えない

const name2 = names.map((n) =>{
    return n + "さん";
});

console.log(name2);



//アロー関数
const doubled2 = numbers.map(n => n * 2);
console.log(doubled2);

const upperNames = names.map(n => n.toUpperCase());
console.log(upperNames);