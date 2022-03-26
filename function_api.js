const url = 'https://api.adviceslip.com/advice'
const id = document.querySelector('.adviceId')
const message = document.querySelector('.adviceText')

const getAdvice = ()=> {
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            message.innerHTML = `"${data.slip.advice}"`
            id.innerHTML = `Advice # ${data.slip.id}`
        } )
}

getAdvice();
