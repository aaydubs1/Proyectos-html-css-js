"use strict"

// llamar a .parrafo y .button

const parrafos = document.querySelectorAll(`.parrafo`)
const buttons = document.querySelectorAll(`.button`)
console.log(parrafos)
console.log(buttons)

// primero activar los botones
//When click buttons remove clase active a TODOS los buttons 
// Add clase active a 1 button

buttons.forEach((_,i)=>{
    buttons[i].addEventListener(`click`,()=>{
        buttons.forEach((_,i)=>{
            buttons[i].classList.remove(`active`)
        })
           buttons[i].classList.add(`active`)
// remove clase visible a todos los parrafos
// add clase visible a un parrafo

    parrafos.forEach((_,i)=>{
        parrafos[i].classList.remove(`visible`)
    })
        parrafos[i].classList.add(`visible`)
    
    })
 
})

