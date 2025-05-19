

let nome = "joao"



function faleMeuNome(){
    console.log(nome)

}

faleMeuNome()

let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".starbucks")

function trocarCor(cor){
    circulo.style.background = cor
}

function trocaImagem(img) {
    imagem.src = img
    
}
function entrarlink(url){
        window.open(url, "_blank");

}

