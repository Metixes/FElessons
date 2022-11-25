// Level Easy                                                       Задача №1
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водій), 
// і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Зміна імені водія
// Метод для перевірки імені водія
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

let vehicle = {
    manufacturer: 'USA',
    model: 'Dodge',
    year: 2022,
    avgSpeed: 120,
    fuel: 60,
    fuelConsumption: 15,
    driver: 'Human',  
}

function showInfoCar() {
    alert(`Інформація про авто \n${Object.entries(vehicle).join('\n')}`)

    let driverName = confirm(`В дорогу ви вирушаете з водієм ${vehicle.driver} \nБажаєте змінити водія?`)
    
    if(driverName === true){
        let newDriver = prompt('Введи нове ім\'я водія')

        if(newDriver == 0) {
            prompt('Введи нове ім\'я водія')
        } else {
            vehicle.driver = newDriver
        }
    } 

    alert(`Твій новий водій ${vehicle.driver}`)
}

function calcFuelDistance() {
    let userDistance = +prompt('Введи скільки кілометрів до твого пункту призначення')
    let userTimeToDistanse = (userDistance / vehicle.avgSpeed)
    let fullHours = Math.floor(userTimeToDistanse)
    let fullMinute = ((userTimeToDistanse * 60) % 60).toFixed(0)
    let relax = Math.floor(fullHours / 4)
    let fueltoDistatce = (userDistance / 100) * vehicle.fuelConsumption

    if(fullHours < 4) {
        return alert(`Вам їхати ${userDistance}км. На місці ви будете через ${fullHours}год. ${fullMinute}хв. \nНа дорогу потрібно ${fueltoDistatce}л. бензину. \nВодію відпочинок не потрібен`)

    } else if(fullHours > 4 || fullMinute > 0) {
       return alert(`Вам їхати ${userDistance}км, водію потрібно робити перерву на 1 годину, кожні 4 години шляху. \nВ нашому випадку загальна кількість годин для відпочинку ${relax}год. \nДо місця призначення ви прибудете за ${fullHours + relax}год. ${fullMinute}хв. \nНа дорогу потрібно ${fueltoDistatce}л. бензину.`) 
    }
}

showInfoCar()
calcFuelDistance()

                        // Level Normal                     Задача №1

                        // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
                        //  Для виведення часу на екран.
                        //  Зміни часу на передану кількість секунд.
                        //  Зміни часу на передану кількість хвилин.
                        //  Зміни часу на передану кількість годин.
                        //  Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, 
                        //      може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, 
                        //      то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість 
                        //      того що користувач може передати 150 секунд, або 75 хвилин.

let date = new Date()

alert(`Зараз ${date.toLocaleTimeString()}`)

let addHours = +prompt('Скільки хочеш додати годин?', 0)
let addMinutes = +prompt('Скільки хочеш додати хвилин?', 0)
let addSeconds = +prompt('Скільки хочеш додати секунд?', 0)

let time = {

    changeTime : function() {
        date.setHours(date.getHours() + addHours)
        date.setMinutes(date.getMinutes() + addMinutes)
        date.setSeconds(date.getSeconds() + addSeconds)
        
        return alert(`Твій час ${date.toLocaleTimeString()}`)
    }

}

time.changeTime()
