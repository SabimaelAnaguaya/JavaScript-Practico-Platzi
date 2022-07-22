var img = document.querySelector('#img');
var input = document.querySelector('#input');
var btn = document.querySelector('#btnFun');
var result = document.querySelector('#resultado');

function edadMayor(){

    if(input.value > 18){
        img.setAttribute('src', 'https://static.wikia.nocookie.net/looneytunes/images/d/d9/Granny.png/revision/latest?cb=20120103215823&path-prefix=es');
        result.innerHTML = ('Eres mayor de Edad');
        
    }else{
        img.setAttribute('src', 'https://i.pinimg.com/originals/c3/6c/87/c36c8761ede77694c5428c30c5669132.png');
        result.innerHTML = ('Eres menor de Edad');
       
    }
}

