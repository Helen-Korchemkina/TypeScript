let age: number = 50;
let name1: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: Function = (a: number) => { return 100 + a };

let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
 str = some; 
}

let person: [string, number];
person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки.
//   Загружается(LOADING) и загружена(READY).

enum Load {LOADING, READY};

const page {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
}
// Сделайте переменную, которая может принимать или строку или число.

let union: string | number;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let literal: 'enable' | 'disable';

// Укажите типы для следующих функций

function showMessage(message: string): void {
  console.log(message);
}
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
function customError(): never {
  throw new Error('Error');
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: string;
    updateAt: string;
  }
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

