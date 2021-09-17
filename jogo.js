var altura = 0;
var largura = 0;
var vidas = 1;

/*
 * Definição do tamanho da tela útil pro jogo, permitindo que a mesma possa se adaptar ao display em que está sendo exibido.
 */
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

/* Insere randomicamente o mosquito na tela do jogo */
function posicionaRandomico() {

    //Testa a existência do mosquito e remove caso exista
    if (document.getElementById('mosquito')) {

        document.getElementById('mosquito').remove();

        if (vidas > 3) {
            window.location.href = 'fim_do_jogo.html';
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        }
    }

    /* Gera randomicamente as posições X e Y onde o mosquito será exibido.*/
    var posicaox = Math.floor(Math.random() * largura) - 90; // - 90 para que toda a extensão da imagem apreça na tela.
    var posicaoy = Math.floor(Math.random() * altura) - 90; // - 90 para que toda a extensão da imagem apreça na tela.

    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;

    var mosquito = document.createElement('img');
    mosquito.src = "imagens/mosquito.png";
    mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito();
    mosquito.style.left = posicaox + "px";
    mosquito.style.top = posicaoy + "px";
    mosquito.style.position = "absolute";
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    };

    document.body.appendChild(mosquito);

    tamanhoMosquito();
    ladoMosquito();
}

//Gera tamanhos randomicos para os mosquitos
function tamanhoMosquito() {
    var sizeMultipler = Math.floor(Math.random() * 4);
    switch (sizeMultipler) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
        case 3:
            return 'mosquito4';
    }
}


//Vira o mosquito pra direita ou esquerda aleatóriamente
function ladoMosquito() {
    var giraMosquito = Math.floor(Math.random() * 2);
    return giraMosquito ? 'ladoA' : 'ladoB';
}