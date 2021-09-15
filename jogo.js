var altura = 0;
var largura = 0;


/*
 * Definição do tamanho da tela útil pro jogo, permitindo que a mesma possa se adaptar ao display em que está sendo exibido.
 */
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

/* Insere randomicamente o mosquito na tela do jogo */
function posicionaRandomico() {

    /* Gera randomicamente as posições X e Y onde o mosquito será exibido.*/
    var posicaox = Math.floor(Math.random() * largura) - 90; // - 90 para que toda a extensão da imagem apreça na tela.
    var posicaoy = Math.floor(Math.random() * altura) - 90; // - 90 para que toda a extensão da imagem apreça na tela.

    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;

    console.log(posicaox, posicaoy);

    var mosquito = document.createElement('img');
    mosquito.src = "imagens/mosquito.png";
    mosquito.className = "mosquito1";
    mosquito.style.left = posicaox + "px";
    mosquito.style.top = posicaoy + "px";
    mosquito.style.position = "absolute";

    document.body.appendChild(mosquito);
}