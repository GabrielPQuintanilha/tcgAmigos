
submit_username.addEventListener("click", enterUsername);
let baralho_um ="";
let baralho_dois ="";
let atributoMaiorValor = "";

let arrayValoresCartas = [];
const arrayAtributos = ["azedo", "carisma", "dodoi", "feio", "resistencia_etilica", "vagabundo"];
let maiorValor = "";

const div_intro = document.querySelector("#intro");
const botao_batalha = document.querySelector(".botao_batalha");
const texto_batalha = document.querySelector("#texto_batalha");

const eliteFour = [0,1,2,3];
let yourTurn ="";
let fimJogo=0;
let dificuldade="";

const cartas = [
  {
    "nome": "machado",
    "id": "m1",
    "azedo": 5,
    "carisma": 8,
    "dodoi": 6,
    "feio": 3,
    "resistencia_etilica": 3,
    "vagabundo": 1
  },
  {
    "nome": "machado bebe",
    "id": "m2",
    "azedo": 7,
    "carisma": 4,
    "dodoi": 2,
    "feio": 8,
    "resistencia_etilica": 5,
    "vagabundo": 8
  },
  {
    "nome": "machado bicudo",
    "id": "m3",
    "azedo": 3,
    "carisma": 8,
    "dodoi": 10,
    "feio": 4,
    "resistencia_etilica": 2,
    "vagabundo": 7
  },
  {
    "nome": "machado picanha",
    "id": "m4",
    "azedo": 6,
    "carisma": 10,
    "dodoi": 8,
    "feio": 4,
    "resistencia_etilica": 1,
    "vagabundo": 4
  },
  {
    "nome": "quinta",
    "id": "q1",
    "azedo": 3,
    "carisma": 7,
    "dodoi": 6,
    "feio": 1,
    "resistencia_etilica": 3,
    "vagabundo": 2
  },
  {
    "nome": "quinta no zap",
    "id": "q2",
    "azedo": 4,
    "carisma": 6,
    "dodoi": 9,
    "feio": 2,
    "resistencia_etilica": 4,
    "vagabundo": 4
  },
  {
    "nome": "quinta coringa",
    "id": "q3",
    "azedo": 8,
    "carisma": 2,
    "dodoi": 6,
    "feio": 10,
    "resistencia_etilica": 3,
    "vagabundo": 5
  },
  {
    "nome": "bd sr quintanilha",
    "id": "q4",
    "azedo": 3,
    "carisma": 6,
    "dodoi": 6,
    "feio": 2,
    "resistencia_etilica": 5,
    "vagabundo": 1
  }
]

function shuffle (){

const shuffle_cartas = cartas.sort((a, b) => 0.5 - Math.random());
    baralho_um = cartas;
    baralho_dois = cartas.splice(0,((cartas.length)/2));
    baralho_um.splice(0,((baralho_um)/2));
}

function enterUsername() {
    const sumbit_username = document.querySelector("#submit_username");
    const username_input = document.querySelector("#username");
    let username = username_input.value;
    
    
    const div_menu = document.querySelector("#menu");
    div_intro.style.display = "block";
    div_menu.style.display = "none";
    
    const span_intro = document.querySelector("#span_intro");
    
    span_intro.textContent = `Preciso que você escolha a dificuldade do nosso desafio:`;
    span_intro.insertAdjacentHTML("afterend", 
    `<div> <input type='button' value='Fácil' id='iniciar_jogo'> <input type='button' value='Médio' id='iniciar_jogo'> <input type='button' value='Difícil' id='iniciar_jogo'></div>`)
    
    const iniciar_jogo = document.querySelectorAll("#iniciar_jogo");
    
    for (const botao of iniciar_jogo){
        botao.addEventListener("click", startGame);
    }
    
    shuffle();
}

function startGame(){
    
    texto_batalha.textContent = ``;
    span_batalha.innerHTML="";
    span_botoes_batalha.innerHTML="";
    popUpFinal.style.display="none";
    
    dificuldade=this.value;
    
    let turn = Math.floor((Math.random() * 2));
    if (turn ===1){
        yourTurn = 1;
        jogadaUsuario();
        }
        else{
            yourTurn=0;
            preFaseOponente();
            // jogadaOponente();
            }
   tamanhoDeckCartas(); 
}

function jogadaUsuario(){
    
    const span_botoes_batalha = document.querySelector("#span_botoes_batalha");
    
    
    texto_batalha.textContent = `Escolha seu atributo:`; 
    span_botoes_batalha.style.display = "flex"
    
    const div_batalha = document.querySelector("#div_batalha");
    const span_batalha = document.querySelector("#span_batalha");
    
    div_intro.style.display = "none";
    div_batalha.style.display="block";
    
    span_batalha.insertAdjacentHTML("beforeend", `<img src="./img/${baralho_um[0].id}.jpg" id="carta_um" class="imagem">`)
    const imagem = document.querySelector("#carta_um");
    
    entrarBaixo();
    
    
    setTimeout(aparecerBotoesUsuario,1500);
    
    
    
}

function jogadaOponente(){
    arrayValoresCartas = [];
    maiorValor = "";
    
    for (let i=0;i<6;i++){
            arrayValoresCartas.push(baralho_dois[0][arrayAtributos[i]]);
        }
    
    
    if (dificuldade==="Difícil"){
        selecionarCaracteristicaOponente();
    }
    else if(dificuldade==="Fácil"){
        const randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber === 1){
                selecionarCaracteristicaOponente();
            }
            else{
                const randomNumber = Math.floor(Math.random() * 6);
                atributoMaiorValor = arrayAtributos[randomNumber];
                maiorValor=baralho_dois[0][atributoMaiorValor];
            }
    }
    else if(dificuldade==="Médio"){
        const randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 1){
                selecionarCaracteristicaOponente();
            }
            else{
                const randomNumber = Math.floor(Math.random() * 6);
                atributoMaiorValor = arrayAtributos[randomNumber];
                maiorValor=baralho_dois[0][atributoMaiorValor];
            }
    }
    
    
    
    setTimeout(function(){texto_batalha.textContent = `Seu oponente escolheu ${atributoMaiorValor}: ${maiorValor}`}, 1000);
    setTimeout(disputaVitoria, 4500);
    
    console.log(baralho_dois[0]);
    console.log(atributoMaiorValor);
    console.log(maiorValor);
}

function disputaVitoria(){
    
    const span_resultado = document.querySelector("#span_resultado");
    const span_botao_proximoRound = document.querySelector("#span_botao_proximoRound");
    
    span_resultado.style.color="red";
    popUpFinal.style.display="block";
    
    span_botao_proximoRound.insertAdjacentHTML("beforeend", `<input type="button" id="botao_proximo_round" value="Próximo">`);
    const botao_proximo_round = document.querySelector("#botao_proximo_round");
    botao_proximo_round.addEventListener("click", nextRound);
    
    
    
    if (baralho_dois[0][atributoMaiorValor]>baralho_um[0][atributoMaiorValor]){
        texto_batalha.textContent=`Você perdeu esse round. Você perde "${baralho_um[0].nome}"`;
        sairCima();
        console.log("Voce perdeu. Voce perde sua Carta");
        baralho_dois.push(baralho_um[0]);
        baralho_dois.push(baralho_dois[0])
        baralho_um.shift();
        baralho_dois.shift();
        texto_batalha.style.color="red";
        yourTurn = 0;
        
    }
    else if (baralho_dois[0][atributoMaiorValor]<baralho_um[0][atributoMaiorValor]){
        texto_batalha.textContent=`Você ganhou esse round. Você ganha "${baralho_dois[0].nome}"`;
        console.log("Voce ganhou. Voce ganha a carta do Oponente");
        sairBaixo();
        baralho_um.push(baralho_dois[0]);
        baralho_um.push(baralho_um[0])
        baralho_dois.shift();
        baralho_um.shift();
        texto_batalha.style.color="green";
        yourTurn = 1;
    }
    else if (baralho_dois[0][atributoMaiorValor]===baralho_um[0][atributoMaiorValor]){
        texto_batalha.textContent="Empate";
        console.log("Empate. ninguem ganha.");
        sairBaixo();
        baralho_um.push(baralho_um[0]);
        baralho_um.shift();
        baralho_dois.push(baralho_dois[0]);
        baralho_dois.shift();
    }
    tamanhoDeckCartas();
}

function selecionarCaracteristica(){
    popUpFinal.style.display="block";
    atributoMaiorValor = this.value;

    console.log(baralho_dois[0])
    console.log(this.value)
    console.log(baralho_um[0][this.value])
    texto_batalha.textContent = `${atributoMaiorValor} do seu oponente é ${baralho_dois[0][atributoMaiorValor]}`;
    setTimeout(disputaVitoria, 2500);
   
}

function nextRound(){
    
    texto_batalha.textContent = ``;
    span_batalha.innerHTML="";
    span_botoes_batalha.innerHTML="";
    popUpFinal.style.display="none";
    span_botao_proximoRound.innerHTML="";
    texto_batalha.style.color="black";
    
    if (yourTurn ===1){
        fimDoJogo()
        if (fimJogo === 0){
            jogadaUsuario();
        }
    }
    else if (yourTurn ===0) {
        fimDoJogo()
        if (fimJogo === 0){
            preFaseOponente();
            // setTimeout(jogadaOponente, 3500); 
        }
    }
}

function fimDoJogo(){
    
    if (baralho_um.length<1){
        texto_batalha.textContent = ``;
        fimJogo = 1;
        span_resultado.style.display="block";
        popUpFinal.style.display="block";
        span_resultado.innerText=`Você perdeu!`;
        span_resultado.style.color="red";
    }
    
    else if(baralho_dois.length<1){
        texto_batalha.textContent = ``;
        fimJogo = 1;
        span_resultado.style.display="block";
        popUpFinal.style.display="block";
        span_resultado.innerText=`Você ganhou!`;
        span_resultado.style.color="green";
    }
}

function tamanhoDeckCartas(){
    const div_deck = document.querySelector("#div_deck");
    div_deck.style.display="flex";
    div_deck.innerHTML="";
    
    for(let i=1;i<=baralho_um.length;i++){
        div_deck.insertAdjacentHTML("beforeend",`<img src="./img/backTCG.JPG" id="img_deck_cartas">`);
    }
}

function preFaseOponente(){
    
    const div_batalha = document.querySelector("#div_batalha");
    const span_batalha = document.querySelector("#span_batalha");
    
    div_intro.style.display = "none";
    div_batalha.style.display="block";
    span_botoes_batalha.style.display = "none";
    texto_batalha.textContent = `Aguarde o seu oponente`;
    
    span_batalha.insertAdjacentHTML("beforeend", `<img src="./img/${baralho_um[0].id}.jpg" id="carta_um" class="imagem">`);
    entrarBaixo();
    
    setTimeout(jogadaOponente, 3000); 
    
}

function selecionarCaracteristicaOponente(){
    
    for (let i=0;i<6;i++){
        if (i==0){
            maiorValor = arrayValoresCartas[0];
            atributoMaiorValor = arrayAtributos[i]
        }
        else if(arrayValoresCartas[i]>maiorValor){
            maiorValor=arrayValoresCartas[i];
            atributoMaiorValor = arrayAtributos[i];
        }
    }
}

function aparecerBotoesUsuario(){
    span_botoes_batalha.insertAdjacentHTML("beforeend", `<div id="div_botao_batalha"> <input type="button" class = "botao_batalha" id ="botao_azedo" value="azedo"> 
    <input type="button" class = "botao_batalha" id ="botao_carisma" value="carisma">
    <input type="button" class = "botao_batalha" id ="botao_dodoi" value="dodoi">
    <input type="button" class = "botao_batalha" id ="botao_feio" value="feio">
    <input type="button" class = "botao_batalha" id ="botao_resistenciaEtilica" value="resistencia_etilica">
    <input type="button" class = "botao_batalha" id ="botao_vagabundo" value="vagabundo"> 
    </div>`)
    
    const botao_batalha = document.querySelectorAll(".botao_batalha");
    
    for (const botao of botao_batalha){
        botao.addEventListener("click", selecionarCaracteristica);
    }
}

function sairBaixo(){
    const imagem = document.querySelector("#carta_um");
    setTimeout(function() {
        imagem.classList.add('sairBaixo');  // Adiciona a classe 'remover' para desaparecer a imagem
    }, 500);
}

function sairCima(){
    const imagem = document.querySelector("#carta_um");
    setTimeout(function() {
        imagem.classList.add('sairCima');  // Adiciona a classe 'remover' para desaparecer a imagem
    }, 500);
    // imagem.style.transform="translateY(0)";
}

function entrarBaixo(){
    const imagem = document.querySelector("#carta_um");
     // Aqui, você aplica o efeito fade-in
    setTimeout(function() {
        imagem.classList.add('mostrar');  // Adiciona a classe 'mostrar' após um pequeno atraso
    }, 500);  // Atraso de 500ms para o efeito de fade-in
    return
}