const audioCapitulo = document.querySelector('#audio-capitulo')
const play_pause = window.document.querySelector('#play-pause')
const proximo = document.querySelector('#proximo')
const anterior = document.querySelector('#anterior')
const capitulo = document.querySelector('.capitulo')

let tocando = false
let capitulos = 1

function tocarFaixa() {
    audioCapitulo.play()
}

function pausarFaixa() {
    audioCapitulo.pause()
}

function playPause() {
    if(tocando == false) {
        tocarFaixa()
        tocando = true
        play_pause.innerHTML ='<i class="bi bi-pause-circle-fill"></i>'
    }else {
        pausarFaixa()
        tocando = false
        play_pause.innerHTML ='<i class="bi bi-play-circle-fill"></i>'
    }
}

play_pause.addEventListener('click', playPause)

proximo.addEventListener('click', () => {
    if(capitulos == 10) {
        capitulos = 1
    }else {
        capitulos += 1
    }
    audioCapitulo.src = `./books/dom-casmurro/${capitulos}.mp3`
    capitulo.innerText = `Capitulo ${capitulos}`
    tocarFaixa()
})

anterior.addEventListener('click', () => {
    if(capitulos == 1) {
        capitulos = 10
    }else {
        capitulos -= 1
    }
    audioCapitulo.src = `./books/dom-casmurro/${capitulos}.mp3`
    capitulo.innerText = `Capitulo ${capitulos}`
    tocarFaixa()
})