// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });
// // 1
// let arrObject: { name: string }[];
// arrObject = [{ name: 'Den' }];
// //2
// let db: {
//   id: number;
//   title: string;
//   info?: {
//     date: Date;
//     isNew: boolean;
//   }
// }
// db = {
//   id: 1,
//   title: 'New item',
//   info: {
//     date: new Date(),
//     isNew: true,
//   }  
// }
// //3 unknown
// let some: unknown;
// some = 10;
// some = 'string';
// let str: string;
// if (typeof some === 'string') {
//   str = some;
// }
// //4 tuple
// let fixed: [string, number];
// fixed = ['str', 1];
// // fixed = [1, 'str'];
// //5 enum
// enum Toggle { ENABLE, DISABLE };
// const service = {
//   status: Toggle.ENABLE,
// }
// if (service.status === Toggle.ENABLE) {
//   console.log('It is active');
// }
// //6 union type
// let union: number | string;
// union = 10;
// union = 'str';
// // union = true;
// function combine(param1: string | number, param2: string | number) {
//   if (typeof param1 === 'string' || typeof param2 === 'string') {
//     return param1.toString() + param2.toString();
//   }
//   return param1 + param2;
// }
// console.log(combine(15,10));
// //7 literal type
// const fruit: string[] = [];
// function workWithArr(arr: string[], value: string, action: 'add' | 'delete') {
//   if (action === 'add') {
//     arr.push(value);
//   } else {
//     const index = arr.indexOf(value);
//     arr.splice(index, 1);
//   }
//   return arr;
// }
// workWithArr(fruit, 'Banana', 'add');
// workWithArr(fruit, 'Apple', 'add');
// workWithArr(fruit, 'Pear', 'add');
// workWithArr(fruit, 'Bear', 'add');
// console.log(fruit);
// workWithArr(fruit, 'Bear', 'delete');
// console.log(fruit);
// //8 void & never
// function print (): void {
//   console.log('Print some text');
// }
// function combine2(num1: number, num2: number): number {
//   return num1 + num2;
// }
// function customError(): never {
//   throw new Error('Some error');
// }
// //9 function type
// function culc(num1: number, num2: number, callback: (arg1: number, arg2: number) => number) {
//   return callback(num1, num2);
// }
// function foo(num1: number, num2: number) {
//   return num1 + num2;
// }
// const result = culc(1, 3, foo);
// console.log(result);
// //10 custom types
// type PersonType = {
//   name: string;
//   age: number;
//   showName: () => void;
// };
// const person1: PersonType = {
//   name: 'Mango',
//   age: 30,
//   showName() {
//     console.log(this.name)
//   }
// };
// const person2: PersonType = {
//   name: 'Alex',
//   age: 25,
//   showName() {
//     console.log(this.name)
//   }
// };
// person1.showName();
// person2.showName();
var age = 50;
var name1 = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
var anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 21];
// Опишите enum условие следующее, он должен отображать статус загрузки.
//   Загружается(LOADING) и загружена(READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
var page, _a = void 0, Load = _a.load, READY = _a.READY;
if (page.load === Load.LOADING) {
    console.log('Страница загружается');
}
if (page.load === Load.READY) {
    console.log('Страница загружена');
}
// Сделайте переменную, которая может принимать или строку или число.
var union;
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
var literal;
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
