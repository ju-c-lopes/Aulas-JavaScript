let cont = 0
let num = document.querySelector('#caixa') //Inicializa a referência ao id input#caixa
num.focus() //dá o foco do cursor para o input
let allnum = []
let tela = document.querySelector('select#tela')
let display = document.querySelector('div#res')

// Função para verificar se o número já foi digitado
function nalista(n){
    let ver = false
    for (let c = 0; c <= allnum.length; c++){
        if (n == allnum[c]){
            ver = true
            break
        } else {
            ver = false
        }
    }
    return ver
}

function add() {


    if (Number(num.value) == 0){
        window.alert('Digite um número para continuar')
        num.focus()
    } else if (Number(num.value) < 1 || Number(num.value) > 100){
        window.alert('Número inválido!')
        num.focus()
    } else if (nalista(Number(num.value)) == true){
        window.alert('Este número já foi digitado, digite outro número')
        num.focus()
    } else {
        if (allnum.length == 0) {
            tela.innerHTML = ''
        }
        let addnum = `Valor ${num.value} adicionado.`
        let numbers = document.createElement('option') //cria um option para o select, que é parent(elemento pai)
        numbers.text = addnum
        numbers.value = `tela${cont + 1}`
        tela.appendChild(numbers)
        allnum[cont] = Number(num.value)
        cont++
    }
    num.value = '' //limpa o input do último número digitado
    num.focus() // foco do cursor para o input
}

// função que irá fazer os cálculos necessários e exibi-los na tela
function calc() {
    let vetorAllNum = allnum.length
    if (allnum.length == 0){
        window.alert('Digite um número antes de finalizar!')
        num.focus()
    } else {
        let linha1 = document.getElementById('l1')
        linha1.innerHTML = `Ao todo, foram cadastrados ${vetorAllNum} números`
        let maior = 0
        let menor = 101
        for(let c = 0; c <= vetorAllNum; c++){
            if(allnum[c] > maior){
                maior = allnum[c]
            }
            if(allnum[c] < menor){
                menor = allnum[c]
            }
        }
        let linha2 = document.getElementById('l2')
        linha2.innerHTML = `O maior valor informado foi ${maior}`
        let linha3 = document.getElementById('l3')
        linha3.innerHTML = `O menor valor informado foi ${menor}`
        
        let soma = 0
        function somar(){
            
            for(let c = 0; c < vetorAllNum; c++){
                soma += allnum[c]
            }
            return soma
        }
        let total = somar()
        
        let linha4 = document.getElementById('l4')
        linha4.innerHTML = `Somando todos os valores, obtemos o total de ${total}`
        
        let media = total / vetorAllNum
        
        let linha5 = document.getElementById('l5')
        linha5.innerHTML = `A média dos valores digitados é ${media}`
        
        // botão aparece para caso o usuário queira fazer uma operação nova
        let botao = document.getElementById('bt')
        botao.style.visibility = 'visible'
    }
}

// função para limpar dados globais, telas, ocultar o botão novo cálculo
function limpar(){
    tela = null
    tela = document.querySelector('select#tela')
    let newopt = document.createElement('option')
    let opt = document.getElementsByTagName('option')
    let newline = 'Entre com os números'
    for (let c = 0; c < cont; c++){
        tela.removeChild(opt[(cont - 1) - c])
    }
    newopt.text = newline
    newopt.value = 'tela1'
    
    tela.appendChild(newopt)
    allnum = []
    cont = 0
    let botao = document.querySelector('input#bt')
    botao.style.visibility = 'hidden'
    display.innerHTML = `<p id="l1"></p><p id="l2"></p><p id="l3"></p><p id="l4"></p><p id="l5"></p>`
    display = document.querySelector('div#res')
    num.focus()
}