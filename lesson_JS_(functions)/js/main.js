// level easy
//                          Задача №1
//          Напиши всі можливі варіанти створення функцій.

function funcDec() {
   console.log('Function Declaration');
}

funcDec();

let funcExp = function() {
    console.log('Function Expretion');
}

funcExp();

let funcArrow = () => console.log('Arrow Function');

funcArrow();

let funcNew = new Function([], console.log('New Function'));

funcNew();
                                //                              Завдання №2
                                // Створи функцію, яка буде виводити кількість переданих їй аргументів.
alert('Кількість переданих агрументів функції в консолі')

function showArgumentsLength() {
    console.log(showArgumentsLength.arguments.length)
}

showArgumentsLength(1, 2, 4)

                                //                  Завдання №3
                                // Напиши функцію, яка приймає 2 числа і повертає :
                                // -1, якщо перше число менше, ніж друге; 
                                // 1 - якщо перше число більше, ніж друге; 
                                // 0 - якщо числа рівні.

let firstNum = +prompt('Введи перше число');
let secondNum = +prompt('Введи вруге число');

showUserNum(firstNum, secondNum);

function showUserNum(firstNum, secondNum) {
    if(arguments[0] < arguments[1]) {
        return alert(-1)
    } else if(arguments[0] > arguments[1]) {
        return alert(1)
    } else {
        alert(0)
    }
}

                                //                  Завдання №4
                                // Напиши функцію, яка обчислює факторіал переданого їй числа.

let userNum = +prompt('Введи число');

function factorial(userNum) {
    return (userNum != 1) ? userNum * factorial(userNum - 1) : 1;
}

alert(`Факторіал числа ${userNum} = ${factorial(userNum)}`);

                                //                  Завдання №5
                                // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
                                // Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let a = +prompt('Введи перше число', 0)
let b = +prompt('Введи друге число', 0)
let c = +prompt('Введи трете число', 0)


function myConcat() {
   return alert(`Твоє число ${myConcat.arguments[0]}${myConcat.arguments[1]}${myConcat.arguments[2]}`)
}

myConcat(a, b, c)

                                //                     Завдання №6
                                // Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
                                // Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

let firstSide = +prompt('Введи довжину', 0)
let secondSide = +prompt('введи ширину', 0)

function area(firstSide, secondSide) {

    if (firstSide === 0) {
        return alert(`Площа квадрату = ${secondSide * 2}`)
    } else if(secondSide === 0){
        return alert(`Площа квадрату = ${firstSide * 2}`)
    } else {
        return alert(`Площа прямокутника = ${firstSide * secondSide}`)
    }

}

area(firstSide, secondSide)

                                // Level Normal         Завдання №1
                                // Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
                                // Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

let userPerfectNum = +prompt('Введи число', 0)

function isPerfect(userPerfectNum) {

    let check = 0;

    for(i = 1; i <= userPerfectNum / 2; i++) {
        if(userPerfectNum % i === 0) {
            check += i;
        }
    }

    if(check === userPerfectNum && check != 0) {
        alert('Твоє число досконале')
    } else {
        alert('Твоє число не досконале')
    }
}

isPerfect(userPerfectNum);

                                //                         Завдання №2
                                // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
                                // і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану 
                                // раніше функцію, щоб дізнатися, чи є це число досконалим.



