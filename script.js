let bady = document.querySelector('body');

fetch('https://picsum.photos/v2/list')
    .then(function (respone) {
        return respone.json()
    })
    .then(function () {
        let number = Math.floor(Math.random() * 30);
        document.body.style.backgroundImage = `url(https://picsum.photos/id/${number}/5000/3333)`
    })


let text = document.querySelector('.text')
let text1 = document.querySelector('.text1')

fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        text.textContent = data.setup
        text1.textContent = data.punchline
    })

let inputTag = document.querySelector('.yozish')
let javob = document.querySelector('.javob')

let parentDiv = document.querySelector('.parent')

let line = document.querySelector('.line')


function logText() {

    let newDiv = document.createElement('div');
    newDiv.classList.add('input-text');

    let newP = document.querySelector('.yozuv')
    newP.textContent = inputTag.value

    let plusBtn = document.querySelector('.javob');
    // plusBtn.textContent = 'plus';
    plusBtn.addEventListener('click', function () {
        newP.classList.toggle('over')
    })

    newDiv.appendChild(newP);
    newDiv.appendChild(plusBtn);
    parentDiv.appendChild(newDiv);
    newDiv.appendChild(btn1);


    inputTag.value = ''
    inputTag.classList.add('olibtasha');
    btn.classList.add('olibtasha');
    javob.classList.add('olibqoyish');
    // newP.classList.add('yozuv');
    btn1.classList.add('olibqoyish');
    line.classList.add('olibtasha')
}

let btn = document.querySelector('.ok');

btn.classList.add('nol')

btn.addEventListener('click', logText)

function korsatish() {
    let newP = document.querySelector('.yozuv')
    inputTag.value = '';
    inputTag.classList.add('olibqoyish');
    btn.classList.add('olibqoyish');
    newP.classList.add('dis');
    javob.classList.add('dis');
    btn1.classList.add('dis');
    line.classList.add('olibqoyish')
}


let btn1 = document.createElement('button');

btn1.classList.add('btn1')

btn1.textContent = 'cleir'
btn1.addEventListener('click', korsatish);


function umar() {
    let box = document.querySelector('.box')
    let data = new Date();

    let hours = document.querySelector('.hours')
    hours.innerHTML = (data.getHours() < 10 ? "0" : " ") + data.getHours();
    let minuts = document.querySelector('.minuts')
    minuts.innerHTML = (data.getMinutes() < 10 ? "0" : " ") + data.getMinutes();
    let mor = 'Good Morning'


    if (hours == 12) {
        hours = 12
    }
    if (hours > 12) {
        hours = hours - 12
        let mor = 'Good everday'
    }

    let ismpromt = prompt('Ismingizni kiriting')


    let ismcha = document.querySelector('.ismcha')

    let ism = document.createElement('div')

    ismcha.appendChild(ism)
    ism.classList.add('ism')

    ism.textContent = mor + ' ' + ismpromt

    ism.appendChild(ismpromt)

}

umar()

setInterval(function () {
    umar()
}, 1000,)



