// Залить на гитхаб и закинуть ссылку
//  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].

//     Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

// let arr = ['Аскар', 'Баяман', 'Калмамат'];

// function changeAtoI(names) {
//     let modifiedNames = names.map(name => name.replace(/а/g, 'я'));
//     console.log(modifiedNames);
//   }

//   changeAtoI(['Аскар', 'Баяман', 'Калмамат']);

// task 2 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.

// function alphabeticalOrder(str) {
//   let chars = str.split("");
//   let sortedChars = chars.sort();
//   let sortedStr = sortedChars.join("");
//   return sortedStr;
// }
// let sortedString = alphabeticalOrder("Beknur");
// console.log(sortedString);

// task 3 Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.

// function getEvenNumbers(numbers) {
//   let evenNumbers = numbers.filter((num) => num % 2 === 0);
//   return evenNumbers;
// }

// let evenNumbers = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(evenNumbers);

// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.

// function getNumericValues(values) {
//   let numericValues = values.filter((value) => typeof value === "number");
//   return numericValues;
// }

// let numericValues = getNumericValues([
//   1,
//   "hello",
//   3,
//   "world",
//   5,
//   null,
//   7,
//   undefined,
//   9,
// ]);
// console.log(numericValues);

// task 5 Напишите функцию, которая принимает массив и возвращает:

//

//     Минимальный элемент

//

// Максимальный элемент

//

// Длину массива

//

// Среднее арифметическое

//

// Ответ должен быть в виде массива

// function getArrayStats(numbers) {
//   let min = Math.min(...numbers);
//   let max = Math.max(...numbers);
//   let length = numbers.length;
//   let sum = numbers.reduce((a, b) => a + b, 0);
//   let avg = sum / length;
//   return [min, max, length, avg];
// }

// let stats = getArrayStats([7, 13, 3, 77, 100]);
// console.log(stats);

// Пример входных данных: [7, 13, 3, 77, 100]

// Результат: [ 3, 100, 5, 40 ]

// task 6

// Напишите функцию, которая принимает массив чисел и возвращает первое четное число.

// function getFirstEvenNumber(numbers) {
//   let evenNumber = numbers.find((num) => num % 2 === 0);
//   return evenNumber;
// }

// let firstEvenNumber = getFirstEvenNumber([1, 3, 5, 7, 9, 2, 4, 6, 8]);
// console.log(firstEvenNumber);

// task 7

// function getWordLengths(str) {
//   let words = str.split(" ");
//   let lengths = words.map((word) => `${word} (${word.length})`);
//   return lengths;
// }

// let lengths = getWordLengths("The quick brown fox jumps over the lazy dog");
// console.log(lengths);

// task 8

// function removeEverySecondElement(elements) {
//   let filteredElements = elements.filter((element, index) => index % 2 !== 0);
//   return filteredElements;
// }
// let elements = ["Keep", "Remove", "Keep", "Remove", "Keep"];
// let modifiedElements = removeEverySecondElement(elements);
// console.log(modifiedElements);

// task 9

// function stringToArray(str) {
//   let words = str.split(" ");
//   return words;
// }
// let words = stringToArray("The quick brown fox jumps over the lazy dog");
// console.log(words);

// task 10

// function add(a, b) {
//   let intA = parseInt(a);
//   let intB = parseInt(b);
//   let sum = intA + intB;
//   return sum.toString();
// }
// let sum = add("1", "2");
// console.log(sum);

// task 11

// function removeDuplicates(numbers) {
//   let set = new Set(numbers);
//   return Array.from(set);
// }

// let numbers = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// let uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers);
