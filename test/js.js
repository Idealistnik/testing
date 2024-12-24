// Задача 1. Поиск значения по ключу

// Напишите функцию getValueByKey, которая принимает объект и строку (ключ) и возвращает значение по этому ключу, даже если ключ находится во вложенном объекте.

const getValueByKey = (obj, word) => {
    const stack = [obj];
    while (stack.length > 0) {
        const currentElement = stack.pop();

        if (currentElement && typeof currentElement === 'object') {
            if (Object.hasOwn(currentElement, word)) {
                return currentElement[word];
            }

            const keys = Object.keys(currentElement);
            for (const key of keys) {
                if (typeof currentElement[key] === 'object' && currentElement[key] !== null) {
                    stack.push(currentElement[key]);
                }
            }
        }
    }
};
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

const createCounter = () => {
    let counter = 0;
    return () => counter += 1;
};

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// const anotherCounter = createCounter();
// console.log(anotherCounter()); // 1
// console.log(counter());        // 4

// Задача 3. Подсчет количества элементов
// Напишите функцию countOccurrences, которая принимает массив строк и возвращает объект с количеством вхождений каждого элемента.

const countOccurrences = (col) => {
    const result = {};
    for (const word of col) {
        result[word] = (result[word] ?? 0) + 1;
    }
    return result;
};
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// console.log(countOccurrences(fruits)); 

// Задача 4. Подсчёт всех ключей

// Напишите функцию countKeys, которая подсчитывает общее количество ключей во вложенном объекте.

const countKeys = (obj) => {

    if (typeof obj !== 'object' && obj !== null) {
        return 'не объект';
    }

    const keys = Object.keys(obj);
    let count = keys.length;
    
    if (count === 0) {
        return 'Пустой объект';
    }

    for (const key of keys) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            count += countKeys(obj[key]);
        }
    }
    return count;
};

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
// };

// console.log(countKeys(data));