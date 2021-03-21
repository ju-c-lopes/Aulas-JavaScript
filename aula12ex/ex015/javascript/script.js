function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('style', 'padding: 20px')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 15){
                img.setAttribute('src', 'imagens/little-boy-300.png')
                genero = 'Criança'
                document.body.style.background = '#8be3fb'
            } else if (idade < 26) {
                img.setAttribute('src', 'imagens/young-man-300.png')
                genero = 'Jovem'
                document.body.style.background = '#939088'
            } else if (idade < 55) {
                img.setAttribute('src', 'imagens/adult-man-300.png')
                genero = 'Adulto'
                document.body.style.background = '#f5e831'
            } else {
                img.setAttribute('src', 'imagens/grandpa-300.png')
                genero = 'Senhor'
                document.body.style.background = '#94b2b4'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 15){
                img.src = 'imagens/little-girl-300.png'
                genero = 'Criança'
                document.body.style.background = '#527a0a'
            } else if (idade < 26) {
                img.src = 'imagens/young-woman-300.png'
                genero = 'Jovem'
                document.body.style.background = '#e88683'
            } else if (idade < 55) {
                img.src = 'imagens/adult-woman-300.png'
                genero = 'Adulto'
                document.body.style.background = '#a5e3f8'
            } else {
                img.src = 'imagens/grandma-300.png'
                genero = 'Senhora'
                document.body.style.background = '#805c5e'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}