function criaCartao(categoria,pergunta,resposta) {
    let container= document.getElementsById('container')
    let cartao= document.createElement('article')
    cartao.classname= 'cartao'
cartao.ineerHTMl=
<div class= "cartao_de_conteudo">
    <h3>${categoria}</h3>
    <div class= "cartao_conteudo_pergunta">
        <p>${pergunta}</p>
        <div class= "cartao_conteudo_resoposta">
            <p>${resposta}</p>
    </div>
    </div>
let respostaEstavisivel= false
function viracartao() {
    respostaEstavisivel= !respostaEstavisivel
    cartao.classlist.toggle('active',respostaEstavisivel)
}
cartao.addEventListener('click', viracartao)

container.appendChild(cartao)
}
  
