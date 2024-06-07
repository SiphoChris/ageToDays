const btn = document.querySelector('button')
let userInput = document.querySelector('#input')
let converted = document.querySelector('#converted')

function convert() {
    userInput = +userInput.value
    let result = userInput * 365 
    converted.innerText = `${result} days`
}

btn.addEventListener('click', convert)