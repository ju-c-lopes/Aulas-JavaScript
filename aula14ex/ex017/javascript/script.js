function tabuada(){
    let num = document.querySelector('input#tab')
    let tab = document.getElementById('res')
    // let item = document.createElement('option')
    // // item.text = 'oi'
    // // tab.appendChild(item)

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}