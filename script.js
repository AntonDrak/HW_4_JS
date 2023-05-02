// zadanie 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

for (let score= 0; score < arr.length; ++score){
    console.log(arr[score])
};

//zadanie 2
let arr_zadanie2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

const arr_zadanie2_negative = arr_zadanie2.filter(function(number) {
  return number < 0 && number > -10 && number < -3;
});

arr_zadanie2_negative.forEach(function(number) {
  console.log(number);
});

console.log(arr_zadanie2_negative);

//zadanie 3

//zad3 for
let ar_zadanie3 = [];

for (let number_zad3 = 23; number_zad3 <= 57;++number_zad3){
    ar_zadanie3.push(number_zad3);
};
console.log(ar_zadanie3)

let ar_zadanie3_while = [];
let number_zad3_while = 23;
//  zad3 while
while(number_zad3_while <= 57){
    ar_zadanie3_while.push(number_zad3_while);
    ++number_zad3_while
};

console.log(ar_zadanie3_while)



let result = 0;

for (let i = 0; i < ar_zadanie3.length; i++) {
  result += ar_zadanie3[i];
}

console.log(result);

//zadanie 4

let arrZadanie4 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arrZadanie4.length; i++) {
  const firstDigit = arrZadanie4[i][0];

  if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
    console.log(arrZadanie4[i]);
  }
}

//zadanie 5

const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < weekDays.length; i++) {
  if (weekDays[i] === 'СБ' || weekDays[i] === 'ВС') {
    document.write(`<strong>${weekDays[i]}</strong><br>`);
  } else {
    document.write(`${weekDays[i]}<br>`);
  }
}

//zadanie 6

const myArray = [1, 2, 'Hello', true];

myArray.push('world'); 
let lastElement = myArray[myArray.length - 1];

console.log(lastElement); 

//zadanie 7

const numbers = [];

while (true) {
  const input = prompt('Введите число');

  if (input === '' || input === null) {
    break; 
  }

  const number = Number(input);

  if (Number.isNaN(number)) {
    alert('Вы ввели не число!'); 
  } else {
    numbers.push(number); 
  }
}

console.log(numbers); 

numbers.sort((a, b) => a - b); 
console.log(numbers);

//zadanie 8

const arrZad8 = [12, false, 'Текст', 4, 2, -5, 0];
let i = arrZad8.length - 1; 

while (i >= 0) {
  console.log(arrZad8[i]); 
  i--; 
}

arrZad8.reverse(); 
console.log(arrZad8); 

//zad9

const arrZad9 = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;

for (let i = 0; i < arrZad9.length; i++) {
  if (arrZad9[i] === undefined) { 
    count++; 
  }
}

console.log(`Количество пустых элементов в массиве: ${count}`);

//zad10
const arrZad10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let sum = 0;
let firstZeroIndex = -1;
let lastZeroIndex = -1;

for (let i = 0; i < arrZad10.length; i++) {
  if (arrZad10[i] === 0) { 
    if (firstZeroIndex === -1) {
      firstZeroIndex = i;
    } else { 
      lastZeroIndex = i;
    }
  }
}

if (firstZeroIndex !== -1 && lastZeroIndex !== -1) { 
  for (let i = firstZeroIndex + 1; i < lastZeroIndex; i++) { 
    sum += arrZad10[i];
  }
} else {
  sum = 0; 
}

console.log(`Сумма элементов массива между первым и последним нулями: ${sum}`); 


