// // Створити HTML-сторінку для відображення/редагування тексту. 
// // При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, 
// // замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea 
// // з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

window.addEventListener('DOMContentLoaded', () => {
    const weatherCity = localStorage.getItem('weatherCity') ? JSON.parse(localStorage.getItem('weatherCity')) : null
    
    if(weatherCity){
        const weatherItems = document.querySelector('.main-weather-items')
        for(i = 0; i < weatherCity.length; i++){
            weatherItems.append(createElement(weatherCity[i]))
        }
    } else {
        resCity()
    }
})

function resCity() {
    const api_key = '5fedcbd7c2c4e234f857f50c88de30ae'

    const lisbon = '2267057'
    const paris = '2968815'
    const belgrade = '792680'
    const venice = '4176380'
    const telAviv = '293397'
    const cair = '360630'
    const newYork = '5128638'
    const newDelhi = '1261481'
    const sanFrancisco = '5391959'
    const tokyo = '1850144'
    const sydney = '2147714'

    const weather = document.querySelector('.main-weather-items')

    axios({
        url: `http://api.openweathermap.org/data/2.5/group?id=${lisbon},${paris},${belgrade},${venice},${telAviv},${cair},${newYork},${newDelhi},${sanFrancisco},${tokyo},${sydney}&units;=metric&appid=${api_key}`,
        method: 'GET',
        params: {
            units: 'metric',
        },
        responseType: 'json',
    })
        .then((res) => {
            for(i = 0; i < res.data.list.length; i++){
                weather.append(createElement(res.data.list[i]))
                setCookie(JSON.stringify(res.data.list))
            }
        })
        .catch(() => console.log('Error!'))
}

function createElement(item){
    const weatherItem = document.createElement('div')
    const itemContentWrapper = document.createElement('div')
    const itemContent = document.createElement('div')
    const cityName = document.createElement('h4')
    const cityTemp = document.createElement('span')
    const weatherIcon = document.createElement('img')

    weatherItem.classList.add('item')
    itemContentWrapper.classList.add('item-content-wrapper')
    itemContent.classList.add('item-content')
    cityName.classList.add('item-title')
    cityTemp.classList.add('item-content__temp')
    weatherIcon.classList.add('item-content__icon')

    cityName.innerText = item.name
    cityTemp.innerHTML = Math.round(item.main.temp) + '&degC'
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`)
    
    weatherItem.append(itemContentWrapper)
    itemContentWrapper.append(cityName, itemContent)
    itemContent.append(cityTemp, weatherIcon)

    return weatherItem
}

function setCookie(value) {
    const date = new Date()
    date.setTime(date.getTime() + (120*60*1000))

    localStorage.setItem('weatherCity', value)
    localStorage.setItem('currentDate', date)
}