
                            // невірна назва змінних
// let 1userName = 'Name'; 
// let !userName = 'Name';
// let user-Name = 'Name';
                            /*зарезервовані назви змінних
let return = 'Name';
let function = 2;
*/

let userName = prompt('Enter your name, please');
let UserDateOfBirth = +prompt('Enter your date of birth, please', 2022);
let currentData = new Date();
let userAge = currentData.getFullYear() - UserDateOfBirth;

if (userName === '') {
    alert('Write your Name!');
} else {
    alert(`Hi, ${userName}!, you are ${userAge} years old, cool!`);
}

let sideSquare = prompt('Enter one side of the square', 0.25);
alert(`Perimeter of the square ${4 * sideSquare} (sm)`);

let radiusCurcle = +prompt('Enter the radius of the circle');
let resultRadius = Math.PI * radiusCurcle ** 2;
alert(`Сircle radius ${resultRadius.toFixed(1)} (m)`);

let userDistance = +prompt('Enter distance to destination (km)', 0);
let userTimeDistance = +prompt('Enter desired travel time (minutes)', 0);
let userSpeed = userDistance / userTimeDistance;
alert(`Your speed should be ${userSpeed * 60} (km/h)`);

const exchangeRates = 1.01;
let dollarСurrency = +prompt('How much $ do you change?', 0);
let euroCurrency = exchangeRates * dollarСurrency;
alert(`You will get ${euroCurrency} €`)