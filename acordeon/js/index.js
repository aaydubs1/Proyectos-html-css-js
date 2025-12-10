'strict mode'

const buttons = document.querySelectorAll(`.Acordeon-button`)
console.log(buttons)

const text = document.querySelectorAll(`.Acordeon-p`)
console.log(text)

buttons.forEach((_,i)=>{
    buttons[i].addEventListener(`click`, ()=>{
        text.forEach((_,i)=>{
            text[i].classList.remove(`visible`)
        })
    text[i].classList.add(`visible`)
    })
})