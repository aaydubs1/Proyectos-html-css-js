'use strict';

const carruselImgs = document.querySelectorAll(`.Carrousel-img`)
console.log(carruselImgs)
const carruselWrapper = document.querySelector(`.Carrousel-wrapper`)
console.log(carruselWrapper)
const btn = document.querySelectorAll(`.Carrousel-btn`)
console.log(btn)
const btnNext = document.querySelector(`.Carrousel-arrow--next`)
console.log(btnNext)
const btnPrev =document.querySelector(`.Carrousel-arrow--prev`)
console.log(btnPrev)

let counter=0

let numImage
numImage = carruselImgs.length 
console.log(numImage)

carruselWrapper.style.width=`${100 * numImage}%`
carruselWrapper.style.gridTemplateColumns = `repeat(${numImage},1fr)`

        const colorPuntos = ()=> {
     btn.forEach((_,index)=>{
        btn[index].classList.remove(`color`)
     })
        btn[counter].classList.add(`color`)
}



    btnNext.addEventListener(`click`, ()=>{

        counter++
        if( counter ===numImage){
            counter=0
        }
        carruselWrapper.style.translate=`-${(100/numImage) * counter}%`
        
        colorPuntos()
    })

 
    btnPrev.addEventListener(`click`, ()=>{

        counter--

        if(counter < 0){
            counter= carruselImgs.length-1
        }

        carruselWrapper.style.translate=`-${(100/numImage)* counter}%`


        colorPuntos()
    })


    btn.forEach((_,index)=>{
        btn[index].addEventListener(`click`, ()=>{
            counter = index
            console.log(counter)

            carruselWrapper.style.translate=`-${(100/numImage)* counter}%`
        })
    colorPuntos()
    })

btn.forEach((_,i)=>{
    btn[i].addEventListener(`click`, ()=>{
        btn.forEach((_,i)=>{
btn[i].classList.remove(`color`)
        })
        btn[i].classList.add(`color`) 
    })
    colorPuntos()
})


 

