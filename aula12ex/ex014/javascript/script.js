var intervalo = setInterval('mudar()', 500)

function mudar() {    
    var visor = document.getElementById('msg')
    var corpo = document.getElementById('corpo')
    var data = new Date()
    var datahora = data.getHours()
    var dataminutos = data.getMinutes()
    var datasegundos = data.getSeconds()
    var foto = document.getElementById('imagem')

    if (datahora < 10) {
        var hora = '0' + data.getHours()
    } else {
        var hora = data.getHours()
    }
    
    if (dataminutos < 10) {
        var minutos = '0' + data.getMinutes()
    } else {
        var minutos = data.getMinutes()
    }

    if (datasegundos < 10) {
        segundos = '0' + data.getSeconds()
    } else {
        var segundos = data.getSeconds()
    }

    if (hora < 6){
        if (hora == 0 && minutos == 00 && segundos == 00){
            foto.style.animation = 'fadein 3s'
        }
        if (hora == 5 && minutos == 59 && segundos == 57){
            foto.style.animation = 'fadeout 3s'
            corpo.style.animation = 'entra1 10s'
        }
        visor.innerHTML = `BOM DESCANSO !<br>Agora são ${hora}:${minutos}:${segundos}.`
        foto.src = 'img/madruga-300.png'
        document.body.style.background = '#352f27'

    } else if (hora < 12){
        if (hora == 6 && minutos == 00 && segundos == 00){
            foto.style.animation = 'fadein 3s'
        }
        if (hora == 11 && minutos == 59 && segundos == 57){
            foto.style.animation = 'fadeout 3s'
            corpo.style.animation = 'entra2 10s'
        }
        visor.innerHTML = `BOM DIA !<br>Agora são ${hora}:${minutos}:${segundos}.`
        foto.src = 'img/manha-300.png'
        document.body.style.background = '#ebcc75'
    } else if (hora < 18){
        if (hora == 12 && minutos == 00 && segundos == 00){
            foto.style.animation = 'fadein 3s'
        }
        if (hora == 17 && minutos == 59 && segundos == 57){
            foto.style.animation = 'fadeout 3s'
            corpo.style.animation = 'entra3 10s'
        }
        visor.innerHTML = `BOA TARDE!<br>Agora são ${hora}:${minutos}:${segundos}.`
        foto.src = 'img/tarde-300.png'
        document.body.style.background = '#a77463'
    } else {
        if (hora == 18 && minutos == 00 && segundos == 00){
            foto.style.animation = 'fadein 3s'
        }
        if (hora == 23 && minutos == 59 && segundos == 57){
            foto.style.animation = 'fadeout 3s'
            corpo.style.animation = 'entra4 10s'
        }
        visor.innerHTML = `BOA NOITE !<br>Agora são ${hora}:${minutos}:${segundos}.`
        foto.src = 'img/noite-300.png'
        document.body.style.background = '#013756'
    }
}