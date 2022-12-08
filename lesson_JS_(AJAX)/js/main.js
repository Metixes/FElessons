window.addEventListener('DOMContentLoaded', () =>{
    let form = document.getElementById('sear-form')

    if(form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault();

            let titleField = e.target.querySelector('input[type=search]')

            let typeField = e.target.querySelector('select[name=type]')

            if(titleField.value.length === 0){
                return;
            } 

            axios({
                url: e.target.action,
                method: e.target.method,
                params: {
                    s: titleField.value,
                    type: typeField.value,
                    page: 1,
                },
                responseType: 'json',
            }) 

                .then(res => {
                    let resultsBlock = document.getElementById('search-results')
                    if(resultsBlock){
                        return
                    }

                    if(res.data.Error){
                        resultsBlock.innerHTML = res.data.Error
                    } else if(res.data.Search && res.data.totalResults){
                        for(i = 0; i < res.data.Search.length; i++){
                            resultsBlock.append(createFielItem(res.data.Search[i]))
                        }
                        createPagination(res.data.totalResults)
                    }
                })
                .catch(() => console.log('Error!') )
        })
    }
    
})

function createFielItem(item) {
    let el = document.createElement('div')
    let elTitle = document.createElement('h4')
    let elYear = document.createElement('div')
    let elButton = document.createElement('span')

    el.classList.add('film-item')
    elTitle.classList.add('film-item-title')
    elYear.classList.add('film-item-year')
    elButton.classList.add('film-item-')

    elTitle.innerHTML ='Name: ' + item.Title
    elYear.innerHTML ='Year: ' + item.Year ?? '-'
    elButton.innerHTML ='Details'

    el.append(elTitle)
    el.append(elYear)
    el.append(elButton)

    resultsBlock.append(el)
    return el
}
function createPagination(amount){
    let ul = document.getElementById('search-pagination')

    if(!ul){
        return
    }

    ul.innerHTML = ''

    // for(i= 0; i < ammount / 10; i++){
    //     let el = document.createElement('li')
    //     el.innerHTML = i + 1

    //     ul.append(el)
    // }

    // if(ammount <= 10){
        
    // }
}