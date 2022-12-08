

// Level Easy  

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, 
// ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let shopingList = []

while(true){
    let prod = prompt('Введи назву продукту(апельсин), кількість, куплений(так/ні)')

    if(prod === null){
        break;
    }
     
    let prodProper = prod.split(',')

    shopingList.push({name: prodProper[0], amount: prodProper[1], isBuy: prodProper[2]})
}
console.log(shopingList)
shopingList.forEach(el => {
    el.price = +(Math.random(1)*40).toFixed(0)
    el.sum = +el.amount * el.price
})

shopingList.sort((a, b) => {
    if(a.isBuy === 'ні'){
        return -1
    } else if(b.isBuy === 'так'){
        return 1
    } else{
        return 0 
    }
})

for(el of shopingList){
    console.log(el.name + ', придбано - ' + el.isBuy, el)
}

let askProd = prompt('Введи продукт, який хочешь придбати')

shopingList.forEach(el => {
    el.createByProd = (function(){
        if(askProd === el.name && el.isBuy === 'ні'){
           el.isBuy = 'так'
           alert(askProd + ' - відмічено, як придбаний')

        } else if(askProd === el.name && el.isBuy === 'так'){
            alert('Такого товару немає в списку покупок')
        }
        console.log(el.name, el.isBuy);
    }())
})

// // // Норма

// // // Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// // // Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

let delProd = prompt('Введи продукт, який хочешь видалити')

let filterProd = shopingList.filter(el => el.name !== delProd)

alert(delProd + ' - видалено зі списку')
console.log(filterProd)

let askProd1 = prompt('Додавання продукту в список.\nВведи назву продукту, кількість продукту')
let prod1 = askProd1.split(',')

function findProd(){

    let element = null
    let elementIndex = null

    filterProd.forEach((el, i) => {
        if(prod1[0] === el.name){
            element = el
            elementIndex = i
        }
    })
    
    if(element){
        const ammount = +element.amount + +prod1[1]
        filterProd[elementIndex] = Object.assign(element, {amount : ammount , sum : ammount * element.price})
    } else{
        alert('Такого товару немає в списку')
    }
    console.log(filterProd)
}
findProd()

// // Максимум

// // Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// // Підрахунок суми всіх (не) придбаних продуктів.
// // Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

let prodTotalSum = null;

function totalSum(){
    filterProd.forEach(el => {
        prodTotalSum += el.sum 
    })
}
totalSum()
alert('Сума всіх продуктів - ' + prodTotalSum)

let prodNotBySum = null;

function notByProdSum(){
    filterProd.forEach(el => {
        if(el.isBuy === 'ні'){
            prodNotBySum += el.sum
        } else if(el.isBuy !== 'ні'){
            alert('В списку відсутні не придбані товари')
        }
    })
}
notByProdSum()
alert('Сума всіх не придбаних продуктів - ' + prodNotBySum)

const maxList = [...filterProd].sort((a, b) => a.sum - b.sum)
const minList = [...filterProd].sort((a, b) => b.sum - a.sum)

alert('Сортування по цінам в консолі')
console.log(maxList, minList)