let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let line = document.querySelector('.line');
let circle = document.querySelectorAll('.circle');

let progress = 1;

next.addEventListener('click', function(){
    progress++;

    if(progress > circle.length){
        progress = circle.length;
    }

    dotasks()
})

prev.addEventListener('click', function(){
    progress--;

    if(progress < 1){
        progress = 1;
    }

    dotasks()
})

function dotasks(){
    if(progress === 1){
        prev.disabled = true;
    }else if(progress === circle.length){
        next.disabled = true;
    }else{
        next.disabled = false;
        prev.disabled = false;
    }

    for(let [index , value] of circle.entries()){
        if(progress > index){
            value.classList.add('active')
        }else{
            value.classList.remove('active')
        }
    }

    let circleActive = document.querySelectorAll('.active');
    let result = (circleActive.length -1) / (circle.length -1) * 100;
    line.style.width = result + '%'; 
}