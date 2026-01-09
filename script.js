// Carregamento do DOM apresentando sobre-nos
document.addEventListener('DOMContentLoaded', () => {
    ocultar()
    setTimeout(() => {
    document.querySelector('.btn-navegacao').click()
    }, 500)
})


// Função para ocultar as sections
function ocultar(){
    document.querySelectorAll('main > section').forEach((sec) => {
        sec.setAttribute('hidden', true)
    })
}

// Clique dos botões de navegação reexibem a section respectiva
let bts = document.querySelectorAll('header > nav > a')
bts.forEach((b) => {
    b.addEventListener('click', (e) => {
        e.preventDefault()
        ocultar()
        document.getElementById(b.getAttribute('href').substring(1)).removeAttribute('hidden')
    })
})
