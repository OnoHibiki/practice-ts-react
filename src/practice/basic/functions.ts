//戻り値がある関数
function add(a: number, b: number): number {
    return a + b;
}
console.log({ add: add(10,3)});

//戻り値がない関数
function printHello(name: string): void {
    console.log(`Hello! ${name}`);
}
printHello("Hibiki");

//引数における？の意味(呼び出し省略可能)
function buildFullName (firstName: string, lastName?: string): string {
    if(!lastName) return firstName;
    return `${firstName} ${lastName}`;
}
console.log({ full1: buildFullName("Hibiki"), full2: buildFullName("Hibiki","Ono")});

//デフォルト引数の設定
function greet(name: string, voice: string = "Hello"): string {
    return `${voice}, ${name}`;
}
console.log(greet("Hibiki"));
console.log(greet("Hibiki","Hi"));
console.log({ name1: greet("Hibiki"), name2: greet("Hibiki", "Hi")});

//アロー関数
const multiply: (a: number, b: number) => number = (a,b) => a * b;
console.log({ multiply: multiply(6,7) });

//アロー関数理解深めたい
function add_normal(a: number, b: number): number {
    return a + b ;
}
console.log({ 普通: add_normal(2,2) });

const add_arrow = (a: number, b:number) => a + b;
console.log({ アロー:add_arrow(2,2) });

const minus = (a:number, b:number) => a - b;
console.log({ 初セルフアロー: minus(10,9)});