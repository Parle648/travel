// POUP MENU
const logBtn = document.querySelector('.login')
const poupMenu = document.querySelector('#modal-window')
const poupMenuWrap = document.querySelector('#modal')

logBtn.addEventListener('click', function(){
    
    poupMenu.classList.remove('visible')
    document.classList.add('hiden')
})

poupMenu.addEventListener('click', function(){
    poupMenu.classList.add('visible')
})

poupMenuWrap.addEventListener('click', function(){
    event.stopPropagation();
})

// CAROUSEL

const carousWrap = document.querySelector('.carousel-wrapper')

const carouselElement = document.querySelectorAll('.carousel-item')

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')

one.addEventListener('click', function(){


    carouselElement.forEach(function(item){

        item.classList.remove('one', 'two', 'three')
        
    })

    carousWrap.classList.add('animation')

    one.classList.add('two');
    two.classList.add('three');
    three.classList.add('one');
})

two.addEventListener('click', function(){

    carouselElement.forEach(function(item){

        item.classList.remove('one', 'two', 'three')
        
    })

    one.classList.add('one');
    two.classList.add('two');
    three.classList.add('three');
})

three.addEventListener('click', function(){

    carouselElement.forEach(function(item){

        item.classList.remove('one', 'two', 'three')

    })

    one.classList.add('three');
    two.classList.add('one');
    three.classList.add('two');
})