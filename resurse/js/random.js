let buton = document.querySelector('#rainbow');
let activ = 0;
let on;
buton.addEventListener('click', function(){
    if (activ === 0){
        activ = 1;
        on = setInterval(random, 500);
    } else {
        activ = 0;
        clearInterval(on);
        document.body.style.backgroundColor = 'white';
    }
})
function random(){
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}