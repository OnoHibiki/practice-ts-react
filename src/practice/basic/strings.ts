// stringのいろいろ

const firstName: string = "Hibiki";
const lastName: string = "Ono";

//右辺の値で型が一意に推論できる場合、変数宣言と同時に初期化すれば型宣言は省略できる
const fullName = firstName + " " + lastName;

//テンプレートリテラル（右辺が必ずString）
const fullName2 = `${firstName} ${lastName}`;

console.log(fullName);
console.log(fullName2);

console.log({firstName , fullName2});