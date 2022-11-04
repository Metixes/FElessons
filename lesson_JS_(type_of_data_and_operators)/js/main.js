// level easy

let sum1 = +(0.1 + 0.2).toFixed(1);
alert(sum1)

let sum2 = +'1' + 2;
alert(sum2)

let volumeDriver = +prompt('enter the size of the flash drive (Gb)', 0);
let volumeFiles = 820;
let ammountFiles = Math.trunc((volumeDriver * 1024) / volumeFiles);
console.log(ammountFiles);

// level middle

let userSum = +prompt('How much money do you have?', 0);
let chocolateSum = +prompt('Cost of one chocolate?', 0);
let amountChocolates = Math.trunc(userSum / chocolateSum);
let moneyLeft = userSum % chocolateSum;
alert(`You can buy ${amountChocolates} chocolates, you have ${moneyLeft} dollars left`);

let userNumber = prompt('Enter the number');
alert(userNumber.split('').reverse().join(''));

// level hard

let depositSum = +prompt('Enter your sum investment', 0)
let depositTerms = +prompt('Initial deposit amount', 0);
let depositPercentage = +prompt('Annual interest rate %', 0 ) / 100;
let clientProfit = ((depositSum * depositPercentage * depositTerms) / 12).toFixed(2);
alert(`Your amount of accrued interest ${clientProfit}$`);


