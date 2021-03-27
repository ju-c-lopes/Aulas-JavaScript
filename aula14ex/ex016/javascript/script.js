var tit = document.getElementById('tit')
tit.innerHTML = 'Vamos contar !'

function result() {
    var start = document.querySelector('input#inicio')
    var end = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#resultado')

    if (start.value.length == 0 || end.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar &#x1F937<br>Está faltando dados'
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(start.value)
        var f = Number(end.value)
        var p = Number(passo.value)
        var emoji = String('&#x261D')
        var emoji2 = String('&#x1F3C1')

        if (i < f){
            for (var c = i; c <= f; c += p){                
                res.innerHTML += `${c} ${emoji} `                
            }
        } else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} ${emoji} `
            }
        }
        res.innerHTML += `${emoji2}`
    }
}