                                        //          level easy
                                        //                              Завдання №1
                                        // Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), 
                                        // підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
                                        // передбач можливість введення невірних даних.

// let userAge = +prompt('Hello, please indicate your age', 0)
// if(userAge > 0 && userAge <= 11) {
//     alert('You are a child');
// } else if (userAge >= 12 && userAge <= 17) {
//     alert ('You are a teenager');
// } else if (userAge >= 18 && userAge <= 59) {
//     alert ('You are an adult');
// } else if (userAge >= 60 && userAge <= 116) {
//     alert ('You are a pensioner');
// } else if (userAge > 116) {
//     alert (`Сongratulations you broke the Guinness record, now you are the oldest person in the world`);
// }  else if (userAge === 0 ) {
//     alert('You haven\'t been born yet');
// }  else if (userAge < 0) {
//     alert ('Oh my friend, age can not be returned back');
// }
// else {
//     alert('Entered not a number');
// }

                                            //                          Завдання №2
                                            // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
                                            // який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

// let userNum = prompt('Enter a number from 0 to 9');
// switch (userNum) {
//     case '1':
//         alert('1!');
//         break;
//     case '2':
//         alert('2@');
//         break;
//     case '3':
//         alert('3#');
//         break;
//     case '4':
//         alert('4$');
//         break;
//     case '5':
//         alert('5%');
//         break;
//     case '6':
//         alert('6^');
//         break;
//     case '7':
//         alert('7&');
//         break;
//     case '8':
//         alert('8*');
//         break;
//     case '9':
//         alert('9(');
//         break;
//     case '0':
//         alert('0)');
//         break;
//     default:
//         alert('This is not a number');
// }

                                            //                          Завдання №3
                                            // Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let num1 = +prompt('Enter first number', 0);
// let num2 = +prompt('Enter second number', 0);
// let sum = 0;
// for(i=num1; i >= num1 && i <= num2; i++) {
//     sum += i
// }
// alert(`The sum of the numbers in the range ${sum}`);

                                            //                          Завдання №4
                                            // Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// let x = +prompt('Enter first number', 0);
// let y = +prompt('Enter second number', 0);

// while(x !== 0 && y !== 0){
//   if(x > y){
//      x = x % y;
//   }else{
//      y = y % x;
//   }
// }
// let divisor = x + y;
// alert(`Greatest common divisor ${divisor}`);

                                            //                          Завдання №5
                                            // Запитай у користувача число і виведи всі дільники цього числа.

// let number = +prompt('Enter the number', 0);

// for(let i = 1; i < number; i++) {
//     if (number % i == 0) {
//         console.log(`All divisors of ${i}`)
//     } 
// }

                                            //      level middle
                                            //                          Завдання №1
                                            // Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// var x = 5921;
// var y = 0;
// for(; x; x = Math.floor(x / 10)) {
//     y *= 10;
//     y += x % 10;
// }
// console.log(y);

                                            //                          Завдання №2
                                            // Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// let pal = +prompt('Enter a five-digit number');

// let pal = 0;

// while(pal === NaN || Number(pal.toString().length) !== 5) {
//     pal = +prompt('Enter a five-digit number');

//     let rev = Number(pal.toString().split('').reverse().join(''));
//     console.log(pal) 

//     if(pal === rev) {
//         alert('palindrom')
//     } else if(isNaN(pal)) {
//         alert('ne chislo')
//     } else {
//         alert('ne palindrom')
//     }
// }

// while(true) {
//     let pal = +prompt('Enter a five-digit number');

//     let rev = Number(pal.toString().split('').reverse().join(''));

//     if(pal === rev) {
//         alert('palindrom')
//         break;
//     } else if(isNaN(pal)) {
//         alert('ne chislo')
//     } else {
//         alert('ne palindrom')
//     }
// }


                                        //                             Завдання №2
                                        // Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
                                        // від 200 до 300 - знижка буде 3%; 
                                        // від 300 до 500 - 5%;
                                        // від 500 і вище - 7%.

// let userSum = +prompt('Введи загальку суму твоїх покупок')
// let discoun3 = userSum * 0.03;
// let discoun5 = userSum * 0.05;
// let discoun7 = userSum * 0.07;

// if(userSum >= 200 && userSum < 300) {
//     alert(`Ти купив товару на ${userSum}$. Твоя знижка 3%, до сплати ${userSum - discoun3}$`)
// } else if(userSum >= 300 && userSum < 500) {
//     alert(`Ти купив товару на ${userSum}$. Твоя знижка 5%, до сплати ${userSum - discoun5}$`)
// } else if(userSum >= 500) {
//     alert(`Ти купив товару на ${userSum}$. Твоя знижка 7%, до сплати ${userSum - discoun7}$`)
// }   else {
//     alert(`Ти купив товару на ${userSum}$. Щоб отримати знижку сумма твоєї покупки, має бути більше 199$`)
// } 

// let lengthNumber = Math.floor(Math.log(pal) / Math.LN10) + 1; //Кількість цифр

// Перевертає цифри задом на перед

// for(revNumber; pal; pal = Math.floor(pal / 10)) {    
//     revNumber *= 10;                                 
//     revNumber += pal % 10;
// if(revNumber === pal) {
//     alert('palendrom')
// } else {
//     alert('ne palendrom')
// }

                            //                                         Завдання №3
                            // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
                            // При цьому також порахуй, скільки з них парних і непарних. 
                            // Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// let positiveNum = 0; //додатні
// let negativeNum = 0; //від'ємні
// let evenNum = 0; //парні 
// let notEvenNum = 0; // не парні
// let zeroNum = 0; //нулі

// for(i = 1; i <= 10; i++){
//     userNum = +prompt('Введи 10 чисел');
    
//     if(userNum % 2 !== 0 && userNum > 0){
//         notEvenNum += 1;
//         positiveNum += 1;
//     } else if(userNum < 0 && userNum % 2 !== 0) {
//         negativeNum += 1;
//         notEvenNum += 1;
//     } else if(userNum < 0 && userNum % 2 === 0) {
//         negativeNum += 1;
//         evenNum += 1;
//     } else if(userNum % 2 === 0 && userNum > 0) {
//         evenNum += 1;
//         positiveNum += 1;
//     } else if(userNum === 0) {
//         zeroNum += 1;
//     }
// }

// console.log(`Додатні числа' ${positiveNum} шт`);
// console.log(`Парні числа' ${evenNum} шт`);
// console.log(`Не парні числа ${notEvenNum} шт`);
// console.log(`Від\'ємні числа' ${negativeNum} шт`);
// console.log(`Нулі' ${zeroNum} шт`);

                                    //                                      Завдання №4
                                    // Зацикли відображення днів тижня таким чином: 
                                    // «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// const date = new Date();

// console.log(new Intl.DateTimeFormat('en-US', date).format(date))

// let days =["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота"];

// let date = new Date();

// let currentDay = date.getDay();

// alert(`Сьогодін ${days[currentDay]}`)
// let userDays = true;

// while(userDays === true) {
//     userDays = confirm('хочеш побачити наступний день?')
//     if (userDays === true) {
//         if(currentDay === 6) {
//             currentDay = 0;
//         } else {
//             currentDay += 1;
//         }   
//         alert(`Сьогодін ${days[currentDay]}`)    
//     } else if(userDays === false) {
//         break;
//     }
// }

// userDays = true;

// while(userDays === true) {
//     userDays = confirm('День тижня. Хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
//     userDays = confirm('Понеділок, хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
//     userDays = confirm('Вівторок, хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
//     userDays = confirm('Середа, хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
//     userDays = confirm('Четвер, хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
//     userDays = confirm('Пятниця, хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
//     userDays = confirm('Субота, хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
//     userDays = confirm('Неділя, хочеш побачити наступний день?')
//     if(userDays === false){
//         break;
//     }
// }
                                //  level hard

                                //                                              Завдання №1
                                // Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
                                // кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
                                // Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
                                // Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, 
                                // поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


// let randomValue = Math.floor(Math.random() * 101);
// let attempt = 0;
// alert("Загадай число від 0 до 100");
// let currentValue = confirm(`Твое число більше ніж ${randomValue}`);

// while (true) {
//     attempt++; // увеличили количество попыток
//     let currentValue = prompt("Попробуйте угадать. Введите значение");

//     if (currentValue == "стоп") {
//         break;
//     }

//     if (currentValue > randomValue) {
//         alert(`Я загадал значение меньше чем ${currentValue}`);
//     }
//     else if (currentValue < randomValue) {
//         alert(`Я загадал значение больше чем ${currentValue}`);
//     }
//     if (currentValue == randomValue) {
//         alert(`Правильно! Загаданное значение ${randomValue}. Вы угадали с ${attempt}й попытки.`);
//         break;
//     }
// }

                                                            //Завдання №2
                                        // Виведи таблицю множення для всіх чисел від 2 до 9. 
                                        // Кожне число необхідно помножити на числа від 1 до 10.

// for(i = 2; i <= 9; i++){
//     console.log('Таблиця множення на ' + i);
//     for(y = 1; y <= 10; y++){
//         console.log(`${i} * ${y} = ${i * y}`)
//     }
// }

                                        //                          Завдання №3
                                        // Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
                                        // Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

// let userYear = +prompt('введи текущую год')
// let userMonths = +prompt('введи текущую месяц')
// let userDay = +prompt('введи текущую месяц')

// let localData = new Date();
// alert(`${localData.getDay()} ${localData.getMonth()} ${localData.getFullYear()}`)

// let fullYear = localData.getFullYear();
// // newDate.getFullYear(); 
// // newDate.getMonth(); 
// // newDate.getDate(); 

// console.log(fullYear)

// let date
// date.setDate(date.getDate() + 1); //1668031200000
// currentDate = new Date(1668031200000); //Thu Nov 10 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(date)

function getMessage (a, b) {
    
}

getMessage();