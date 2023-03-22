const rede = document.querySelectorAll('.btn')

rede.forEach ((elemento) => {
    elemento.addEventListener("click", (button)=>{
        button = button.target.id;
        socialMidia(button)
    })
})

function socialMidia(social){
    let container = document.querySelector('#pagina');
    let boxSearch = document.createElement('div');

    // boxSearch.innerHTML = `<img src="pacote-d013/imagens/tela-${social}.jpg" alt="${social}">
    // <a href="https://instagram.com/diegooveras" target="_blank">Acesse Aqui</a>`;
    // container.appendChild(boxSearch)
}