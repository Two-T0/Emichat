const form =document.querySelector('form')
let container1 = document.querySelector('#container1')
let container2 = document.querySelector('#container2')
let as = document.querySelectorAll('header a')

    as[0].addEventListener('click', ()=>{
        as[0].classList.add('active')
        as[1].classList.remove('active')
        if (container2.classList.contains('hidden')){
            return False
        }
        container2.classList.remove('visible')
        container2.classList.add('hidden')
        container1.classList.add('visible')
        container1.classList.remove('hidden')
    })
    as[1].addEventListener('click', ()=>{
        as[1].classList.add('active')
        as[0].classList.remove('active')

        if (container1.classList.contains('hidden')){
            return False
        }
        container1.classList.remove('visible')
        container1.classList.add('hidden')
        container2.classList.add('visible')
        container2.classList.remove('hidden')
    })