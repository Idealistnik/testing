// import util from 'util';
// import fs from 'fs';
// import func from "lodash/fp/at.js";


// import { bstr, buf, str } from "crc-32/crc32c";
// import { set } from 'lodash';
// import isObject from 'lodash/isObject.js';
// Задача 1. Поиск значения по ключу

// Напишите функцию getValueByKey, которая принимает объект и строку (ключ) и возвращает значение по этому ключу, даже если ключ находится во вложенном объекте.

// const getValueByKey = (obj, word) => {
//     const stack = [obj];
//     while (stack.length > 0) {
//         const currentElement = stack.pop();

//         if (currentElement && typeof currentElement === 'object') {
//             if (Object.hasOwn(currentElement, word)) {
//                 return currentElement[word];
//             }

//             const keys = Object.keys(currentElement);
//             for (const key of keys) {
//                 if (typeof currentElement[key] === 'object' && currentElement[key] !== null) {
//                     stack.push(currentElement[key]);
//                 }
//             }
//         }
//     }
// };
// const getValueByKey = (obj, word) => {

//     if (typeof obj !== 'object' || obj === null) {
//         return undefined;
//     }

//     if (Object.hasOwn(obj, word)) {
//         return obj[word];
//     } else {
//         const keys = Object.keys(obj);

//         for (const key of keys) {
//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 return getValueByKey(obj[key], word);
//             }
//         }
//     }
// };


// const data = {
//     user: {
//         name: "Alice",
//         address: {
//             city: "Wonderland",
//             postalCode: "12345"
//         }
//     }
// };

// console.log(getValueByKey(data, "city")); // "Wonderland"
// console.log(getValueByKey(data, "postalCode")); // "12345"
// console.log(getValueByKey(data, "name")); // "Alice"
// console.log(getValueByKey(data, "country")); // undefined


// Задача 2: Напишите функцию createCounter, которая создаёт счётчик. Функция должна возвращать другую функцию, которая при каждом вызове увеличивает и возвращает внутреннее значение счётчика.

// const createCounter = () => {
//     let counter = 0;
//     return () => counter += 1;
// };

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// const anotherCounter = createCounter();
// console.log(anotherCounter()); // 1
// console.log(counter());        // 4

// Задача 3. Подсчет количества элементов
// Напишите функцию countOccurrences, которая принимает массив строк и возвращает объект с количеством вхождений каждого элемента.

// const countOccurrences = (col) => {
//     const result = {};
//     for (const word of col) {
//         result[word] = (result[word] ?? 0) + 1;
//     }
//     return result;
// };
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// console.log(countOccurrences(fruits)); 

// Задача 4. Подсчёт всех ключей

// Напишите функцию countKeys, которая подсчитывает общее количество ключей во вложенном объекте.

// const countKeys = (obj) => {

//     if (typeof obj !== 'object' && obj !== null) {
//         return 'не объект';
//     }

//     const keys = Object.keys(obj);
//     let count = keys.length;

//     if (count === 0) {
//         return 'Пустой объект';
//     }

//     for (const key of keys) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             count += countKeys(obj[key]);
//         }
//     }
//     return count;
// };

// const countKeys = (obj) => {

//     if (typeof obj !== 'object' && obj !== null) {
//         return 'не объект';
//     }

//     let count = 0;
//     const stack = [obj];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         const keys = Object.keys(current);
//         count += keys.length;
//         for (const key of keys) {
//             if (typeof current[key] === 'object' && current[key] !== null) {
//                 stack.push(current[key]);
//             }
//         }

//     }
//     return count;
// };
// const data = {
//   a: 1,
//   b: { 
//     c: 2, 
//     d: { 
//       e: 3 
//     } 
//   }
// // };
// const clone = (obj) => {
//     const result = {};
//     const entries = Object.entries(obj);
//     for (const [key, value] of entries) {
//         result[key] = isObject(value) ? clone(value) : value;
//     }
//     return result;

// };


// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.
// let hamster = {
//     stomach: [],

//     eat(food) {
//         // присвоение значения this.stomach вместо вызова this.stomach.push
//         this.stomach = [food];
//     }const obj = {
//     name: 'nikita',
// };
//

// const cart = new Cart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35
// cart.getItems();
// [
//   { item: { name: 'car', price: 3 }, count: 5 },
//   { item: { name: 'house', price: 10 }, count: 2 },
// ]
// const obj = {
//     name: 'John Smith',
//     surname: 'John Smith',
//     more: true,

//
// let counter = 0;
// let id = setTimeout(function inner() {
//     counter += 1;
//     console.log(counter);
//     if (counter === 5) {
//         clearTimeout(id);
//         return;
//     }
//     id = setTimeout(inner, 1000);
// }, 1000);


// const func = (count) => {
//     const innerFunc = (current) => {
//         console.log(current);
//         if (current >= count) {
//             return;
//         }
//         setTimeout(innerFunc, 1000, current + 1);
//     }
//     innerFunc(0);
// }
// func(5);

// const printNumbers = (from, to) => {
//     let current = from;
//     const id = setInterval(() => {
//         console.log(current);
//         current += 1;
//         if (current > to) {
//             clearInterval(id);
//         }
//     }, 1000);
// };
// printNumbers(1, 5)

//
// const printNumbers = (from, to) => {
//     let current = from;
//     let id = setTimeout(function inner() {
//         console.log(current);
//         if (current === to) {
//             clearTimeout(id);
//             return;
//         }
//         current += 1;
//         id = setTimeout(inner, 1000);
//     }, 1000);
// };
// printNumbers(1, 5);


// const promiseWithTimeout = async (promise, timeout) => {
//     const timeoutPromise = new Promise((_resolve, reject) => {
//         setTimeout(() => reject('Timeout'), timeout);
//     });
//     try {
//         await Promise.race([promise, timeoutPromise]);
//     } catch (e) {
//         throw e;
//     }
// };

//
// const promiseWithTimeout = (promise, timeout) => {
//     return new Promise((resolve, reject) => {
//         const id = setTimeout(() => reject('Timeout'), timeout);
//         promise
//             .then((data) => {
//                 clearTimeout(id);
//                 resolve(data);
//             })
//             .catch((err) => {
//                 clearTimeout(id);
//                 reject(err);
//             })
//     })
// };

//
// const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Done"), 3000));
// promiseWithTimeout(slowPromise, 2000)
//     .then(res => console.log(res))
//     .catch(console.error); // "Timeout"


// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// Задача 5. Отложенный вывод
//
// Напишите функцию delayedLog, которая принимает массив строк и выводит каждую строку с задержкой в 1 секунду.
// delayedLog(["Hello", "world", "!"]);
// Через 1 секунду: "Hello"
// Через 2 секунды: "world"
// Через 3 секунды: "!"

// const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// const delay = async (col) => {
//     for (const str of col) {
//         await timeout(1000);
//         console.log(str);
//     }
// };

// const delay = (col) => {
//     col.forEach((str, index) => setTimeout(() => console.log(str), (index + 1) * 1000));
// };
// const arr = ['1', '2', '3'];
// delay(arr);
// =============================================================================================================
// =============================================================================================================
// =============================================================================================================

// 1. Последовательное выполнение (без использования статических методов)
//
// Напишите функцию sequentialTasks, которая принимает массив функций, возвращающих промисы.
// // Функция должна выполнять промисы строго последовательно и возвращать массив их результатов.

// const sequentialTasks = (tasks) => {
//     const initialPromise = Promise.resolve([]);
//     return tasks.reduce((acc, task) => acc.then((result) => task().then((taskResult) => result.concat(taskResult))), initialPromise);
// };
// const sequentialTasks = (tasks) => {
//     let result = Promise.resolve([]);
//     for (const task of tasks) {
//         result = result.then((result) => task().then((taskResult) => result.concat(taskResult)));
//     }
//     return result;
// };
//
// const tasks = [
//     () => Promise.resolve(1),
//     () => Promise.resolve(2),
//     () => Promise.resolve(3),
// ];
//
// sequentialTasks(tasks).then(console.log);

// =============================================================================================================
// =============================================================================================================
// =============================================================================================================

// Таймаут для промиса (написать реализацию на чистых промисах, затем через async/await)
//
// Напишите функцию promiseWithTimeout, которая принимает промис и число timeout в миллисекундах.
//     Если промис не выполнится за заданное время, он должен быть отклонен с ошибкой "Timeout".
//     const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Done"), 3000));

// const promiseWithTimeout = (promise, timeout) => {
//     const timeoutPromise = new Promise((resolve, reject) => setTimeout(() => reject('Timeout'), timeout));
//     return Promise.race([promise, timeoutPromise]);
// };
// const promiseWithTimeout = async (promise, timeout) => {
//     const timeoutPromise = new Promise((resolve, reject) => setTimeout(() => reject('Timeout'), timeout));
//     const result = await Promise.race([promise, timeoutPromise]);
//     return result;
// };

// const promiseWithTimeout = (promise, timeout) => {
//     return new Promise((resolve, reject) => {
//         const id = setTimeout(() => reject('Timeout'), timeout);
//         return promise.then((res) => {
//             clearTimeout(id);
//             resolve(res);
//         }).catch((err) => {
//             clearTimeout(id);
//             reject(err);
//             throw err;
//         })
//     })
// };
// const promiseWithTimeout = async (promise, timeout) => {
//     let id;
//     const promiseTimeout = new Promise((resolve, reject) => {
//         id = setTimeout(() => {
//             reject('Timeout');
//         }, timeout);
//     });
//     try {
//         const result = await Promise.race([promiseTimeout, promise]);
//         clearTimeout(id);
//         return result;
//     } catch (err) {
//         clearTimeout(id);
//         throw err;
//     }
// };
// //
// const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Done"), 3000));
//
// promiseWithTimeout(slowPromise, 2000)
//     .then((res) => console.log(res))
//     .catch(console.error); // "Timeout"

// =============================================================================================================
// =============================================================================================================
// =============================================================================================================

// 3. Реализация Promise.all (по желанию)
//
// Напишите собственную реализацию функции customPromiseAll, которая принимает массив промисов
// и возвращает промис, разрешающийся массивом их результатов. Если хотя бы один промис отклонен,
//     общий промис должен быть отклонен.

// const customPromiseAll = (col) => {
//     let initialPromise = Promise.resolve([]);
//     for (const promise of col) {
//         initialPromise = initialPromise.then((result) => promise.then((currentResult) => result.concat(currentResult)));
//     }
//     return initialPromise;
// };
//
//
// const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// customPromiseAll(promises)
//     .then(console.log) // [1, 2, 3]
//     .catch(console.log);
// Таблицу с id="age-table".
//     Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
//     Первый input в этой форме.
//     Последний input в этой форме.
// showNotification({
//     top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//     right: 10, // 10px от правого края окна (по умолчанию 0px)
//     html: "Hello!", // HTML-уведомление
//     className: "welcome" // дополнительный класс для div (необязательно)
// });

// =============================================================================================================
// =============================================================================================================
// =============================================================================================================
// 4. Динамическая фильтрация списка
//
// Напишите функцию createFilterableList, которая принимает массив строк. Функция должна создать:
//     • Поле ввода <input> для фильтрации.
//  • Список <ul> со всеми строками в виде <li>.
//
// При вводе текста в поле ввода, список должен обновляться, отображая только те элементы, которые содержат введённый текст.

// const createListItem = (word) => {
//     const li = document.createElement('li');
//     li.textContent = word;
//     return li;
// };
//
// const createStartHtml = () => {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     const ul = document.createElement('ul');
//     document.body.append(input, ul);
// };
//
// const render = (state) => {
//     const ul = document.querySelector('ul');
//     const list = state.wordList
//         .filter((item) => item.includes(state.filterWord))
//         .map((item) => createListItem(item));
//     ul.innerHTML = '';
//     ul.append(...list);
// };
//
// const createFilterableList = (list) => {
//     const state = {
//         wordList: list,
//         filterWord: '',
//     };
//     createStartHtml();
//     const input = document.querySelector('input');
//     input.addEventListener('input', (e) => {
//         state.filterWord = e.target.value;
//         render(state);
//     });
//     render(state);
// };
//
// const words = ['hello', 'world', 'goodbye'];
// createFilterableList(words);

// =============================================================================================================
// =============================================================================================================
// =============================================================================================================


