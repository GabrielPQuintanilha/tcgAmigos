
submit_username.addEventListener("click", enterUsername);
let baralho_um ="";
let baralho_dois ="";
let atributoMaiorValor = "";

let arrayValoresCartas = [];
const arrayAtributos = ["Azedo", "Carisma", "Dodói", "Feio", "Resistência Etílica", "Vagabundo"];
let maiorValor = "";

const div_intro = document.querySelector("#intro");
const botao_batalha = document.querySelector(".botao_batalha");
const texto_batalha = document.querySelector("#texto_batalha");

let yourTurn ="";
let fimJogo=0;
let dificuldade="";
let Oponente="";

const cartas = [
  {
    "nome": "Ibra",
    "id": "b1",
    "Azedo": 5,
    "Carisma": 7, 
    "Dodói": 4,
    "Feio": 3,
    "Resistência Etílica": 9,
    "Vagabundo": 1
  },
  {
    "nome": "Lord Ibra",
    "id": "b2",
    "Azedo": 3,
    "Carisma": 8,
    "Dodói": 6,
    "Feio": 1,
    "Resistência Etílica": 10,
    "Vagabundo": 5
  },
  {
    "nome": "Ibra lyon",
    "id": "b3",
    "Azedo": 8,
    "Carisma": 5, 
    "Dodói": 4,
    "Feio": 5,
    "Resistência Etílica": 5,
    "Vagabundo": 5
  },
  {
    "nome": "Majimbra",
    "id": "b4",
    "Azedo": 7,
    "Carisma": 8,
    "Dodói": 7,
    "Feio": 6,
    "Resistência Etílica": 6,
    "Vagabundo": 4
  },
  {
    "nome": "Daniel",
    "id": "d1",
    "Azedo": 8,
    "Carisma": 8,
    "Dodói": 5,
    "Feio": 5,
    "Resistência Etílica": 3,
    "Vagabundo": 4
  },
  {
    "nome": "Daniel UFC",
    "id": "d3",
    "Azedo": 8,
    "Carisma": 2,
    "Dodói": 8,
    "Feio": 7,
    "Resistência Etílica": 8,
    "Vagabundo": 2
  },
  {
    "nome": "Daniel no loop",
    "id": "d4",
    "Azedo": 1,
    "Carisma": 10,
    "Dodói": 8,
    "Feio": 5,
    "Resistência Etílica": 2,
    "Vagabundo": 9
  },
  {
    "nome": "Magno",
    "id": "f1",
    "Azedo": 7,
    "Carisma": 8,
    "Dodói": 5,
    "Feio": 2,
    "Resistência Etílica": 3,
    "Vagabundo": 2
  },
  {
    "nome": "Magnifico",
    "id": "f2",
    "Azedo": 2,
    "Carisma": 7,
    "Dodói": 9,
    "Feio": 9,
    "Resistência Etílica": 2,
    "Vagabundo": 8
  },
  {
    "nome": "Krav Magno",
    "id": "f3",
    "Azedo": 9,
    "Carisma": 4,
    "Dodói": 8,
    "Feio": 4,
    "Resistência Etílica": 8,
    "Vagabundo": 4
  },
  {
    "nome": "Magn in",
    "id": "f4",
    "Azedo": 5,
    "Carisma": 2,
    "Dodói": 8,
    "Feio": 2,
    "Resistência Etílica": 7,
    "Vagabundo": 1
  },
  {
    "nome": "André Tannure",
    "id": "h1",
    "Azedo": 2,
    "Carisma": 5,
    "Dodói": 7,
    "Feio": 3,
    "Resistência Etílica": 7,
    "Vagabundo": 7
  },
  {
    "nome": "Haroldo inchado",
    "id": "h2",
    "Azedo": 6,
    "Carisma": 8,
    "Dodói": 9,
    "Feio": 10,
    "Resistência Etílica": 4,
    "Vagabundo": 5
  },
  {
    "nome": "Haroldo viajante",
    "id": "h3",
    "Azedo": 1,
    "Carisma": 9,
    "Dodói": 10,
    "Feio": 2,
    "Resistência Etílica": 5,
    "Vagabundo": 10
  },
  {
    "nome": "Igor",
    "id": "i1",
    "Azedo": 7,
    "Carisma": 8,
    "Dodói": 4,
    "Feio": 2,
    "Resistência Etílica": 3,
    "Vagabundo": 3
  },
  {
    "nome": "Lei sekaa",
    "id": "i2",
    "Azedo": 2,
    "Carisma": 7,
    "Dodói": 7,
    "Feio": 8,
    "Resistência Etílica": 2,
    "Vagabundo": 8
  },
  {
    "nome": "Curupigor",
    "id": "i3",
    "Azedo": 8,
    "Carisma": 8,
    "Dodói": 8,
    "Feio": 10,
    "Resistência Etílica": 8,
    "Vagabundo": 5
  },
  {
    "nome": "Igor quarentena",
    "id": "i4",
    "Azedo": 2,
    "Carisma": 4,
    "Dodói": 8,
    "Feio": 4,
    "Resistência Etílica": 5,
    "Vagabundo": 10
  },
  {
    "nome": "Machado",
    "id": "m1",
    "Azedo": 5,
    "Carisma": 8,
    "Dodói": 6,
    "Feio": 3,
    "Resistência Etílica": 3,
    "Vagabundo": 1
  },
  {
    "nome": "Machado bebê",
    "id": "m2",
    "Azedo": 7,
    "Carisma": 4,
    "Dodói": 2,
    "Feio": 8,
    "Resistência Etílica": 5,
    "Vagabundo": 8
  },
  {
    "nome": "Machado bicudo",
    "id": "m3",
    "Azedo": 3,
    "Carisma": 8,
    "Dodói": 10,
    "Feio": 4,
    "Resistência Etílica": 2,
    "Vagabundo": 7
  },
  {
    "nome": "Machado picanha",
    "id": "m4",
    "Azedo": 6,
    "Carisma": 10,
    "Dodói": 8,
    "Feio": 4,
    "Resistência Etílica": 1,
    "Vagabundo": 4
  },
  {
    "nome": "Thiago",
    "id": "o1",
    "Azedo": 1,
    "Carisma": 9,
    "Dodói": 3,
    "Feio": 3,
    "Resistência Etílica": 5,
    "Vagabundo": 6
  },
  {
    "nome": "Thiago pescado",
    "id": "o4",
    "Azedo": 8,
    "Carisma": 7,
    "Dodói": 7,
    "Feio": 4,
    "Resistência Etílica": 5,
    "Vagabundo": 10
  },
  {
    "nome": "Quinta",
    "id": "q1",
    "Azedo": 3,
    "Carisma": 7,
    "Dodói": 6,
    "Feio": 1,
    "Resistência Etílica": 3,
    "Vagabundo": 2
  },
  {
    "nome": "Quinta no zap",
    "id": "q2",
    "Azedo": 4,
    "Carisma": 6,
    "Dodói": 9,
    "Feio": 2,
    "Resistência Etílica": 4,
    "Vagabundo": 4
  },
  {
    "nome": "Quinta coringa",
    "id": "q3",
    "Azedo": 8,
    "Carisma": 2,
    "Dodói": 6,
    "Feio": 10,
    "Resistência Etílica": 3,
    "Vagabundo": 5
  },
  {
    "nome": "Bd sr. Quintanilha",
    "id": "q4",
    "Azedo": 3,
    "Carisma": 6,
    "Dodói": 6,
    "Feio": 2,
    "Resistência Etílica": 5,
    "Vagabundo": 1
  },
  {
    "nome": "Duds",
    "id": "r1",
    "Azedo": 1,
    "Carisma": 9,
    "Dodói": 3,
    "Feio": 2,
    "Resistência Etílica": 5,
    "Vagabundo": 6
  },
  {
    "nome": "Faz a base",
    "id": "r2",
    "Azedo": 8,
    "Carisma": 2,
    "Dodói": 6,
    "Feio": 2,
    "Resistência Etílica": 5,
    "Vagabundo": 8
  },
  {
    "nome": "Chupacabra",
    "id": "r3",
    "Azedo": 8,
    "Carisma": 8,
    "Dodói": 8,
    "Feio": 10,
    "Resistência Etílica": 8,
    "Vagabundo": 5
  },
  {
    "nome": "Duds vou mais n",
    "id": "r4",
    "Azedo": 8,
    "Carisma": 1,
    "Dodói": 9,
    "Feio": 4,
    "Resistência Etílica": 5,
    "Vagabundo": 10
  },
  {
    "nome": "Pazos",
    "id": "x1",
    "Azedo": 5,
    "Carisma": 7,
    "Dodói": 8,
    "Feio": 3,
    "Resistência Etílica": 6,
    "Vagabundo": 2
  },
  {
    "nome": "Rest in Pazos",
    "id": "x4",
    "Azedo": 5,
    "Carisma": 6,
    "Dodói": 10,
    "Feio": 9,
    "Resistência Etílica": 1,
    "Vagabundo": 8
  },
  {
    "nome": "Dedezão",
    "id": "z1",
    "Azedo": 10,
    "Carisma": 6,
    "Dodói": 9,
    "Feio": 3,
    "Resistência Etílica": 7,
    "Vagabundo": 3
  },
  {
    "nome": "Abaporu",
    "id": "z2",
    "Azedo": 4,
    "Carisma": 7,
    "Dodói": 10,
    "Feio": 8,
    "Resistência Etílica": 1,
    "Vagabundo": 8
  },
  {
    "nome": "Mão de raquete",
    "id": "z3",
    "Azedo": 1,
    "Carisma": 7,
    "Dodói": 8,
    "Feio": 1,
    "Resistência Etílica": 7,
    "Vagabundo": 4
  },
  {
    "nome": "Dedezão do FB",
    "id": "z4",
    "Azedo": 1,
    "Carisma": 9,
    "Dodói": 5,
    "Feio": 3,
    "Resistência Etílica": 7,
    "Vagabundo": 3
  }
]

function shuffle (){

const shuffle_cartas = cartas.sort((a, b) => 0.5 - Math.random());
    baralho_um = cartas;
    baralho_dois = cartas.splice(0,((cartas.length)/2));
    baralho_um.splice(0,((baralho_um)/2));
}

function enterUsername() {
    document.body.style.backgroundImage = "url('./img/mesaMadeira.png')";
    // document.body.style.backgroundRepeat= "repeat";
    
    const sumbit_username = document.querySelector("#submit_username");
    
    const div_menu = document.querySelector("#menu");
    div_intro.style.display = "block";
    div_menu.style.display = "none";
    
    const span_intro = document.querySelector("#span_intro");
    
    span_intro.innerHTML =`<p>Selecione o nível de dificuldade:</p>`;
    span_intro.insertAdjacentHTML("beforeend", 
    `<div > <input type='image' value='Fácil' src="./botoes/botaoFacil.png" id='iniciar_jogo'>
    <input type='image' src="./botoes/botaoMedio.png" value='Médio' id='iniciar_jogo'> 
    <input type='image' src="./botoes/botaoDificil.png" value='Difícil' id='iniciar_jogo'>
    </div>
    <input id="drinkGamesButton" type="image" src="./botoes/copoCerveja.png" value="Drink">`);
    
    const drinkGamesButton = document.querySelector("#drinkGamesButton"); 
    drinkGamesButton.addEventListener("click", startDrinkGame);
    
    escolhaOponente();
    
    const iniciar_jogo = document.querySelectorAll("#iniciar_jogo");
    
    
    for (const botao of iniciar_jogo){
        botao.addEventListener("click", shuffle);
        botao.addEventListener("click", startGame);
        botao.addEventListener("click", inicioMusica);
        
    }
    
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
    texto_batalha.style.display="flex";
    
    span_batalha.insertAdjacentHTML("beforeend", `<img src="./img/${baralho_um[0].id}.png" id="carta_um" class="imagem">`)
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
    
    
    
    setTimeout(function(){texto_batalha.textContent = `${Oponente} escolheu "${atributoMaiorValor}: ${maiorValor}"`}, 1000);
    setTimeout(disputaVitoria, 4500);
    
    console.log(baralho_dois[0]);
    console.log(atributoMaiorValor);
    console.log(maiorValor);
}

function disputaVitoria(){
    
    const span_resultado = document.querySelector("#span_resultado");
    const span_botao_proximoRound = document.querySelector("#span_botao_proximoRound");
    
    // span_resultado.style.color="red";
    popUpFinal.style.display="block";
    
    span_botao_proximoRound.insertAdjacentHTML("beforeend", `<input type="image" src="./botoes/botaoProximo.png" id="botao_proximo_round" value="Próximo">`);
    const botao_proximo_round = document.querySelector("#botao_proximo_round");
    botao_proximo_round.addEventListener("click", nextRound);
    
    texto_batalha.innerHTML="";
    
    if (baralho_dois[0][atributoMaiorValor]>baralho_um[0][atributoMaiorValor]){
        texto_batalha.innerHTML=`<span>Você <span id="span_cor" style="color: red"> perdeu </span> esse round. Você <span id="span_cor" style="color: red"> perde </span> "${baralho_um[0].nome}"</span>`;
        sairCima();
        console.log("Voce perdeu. Voce perde sua Carta");
        baralho_dois.push(baralho_um[0]);
        baralho_dois.push(baralho_dois[0])
        baralho_um.shift();
        baralho_dois.shift();
        yourTurn = 0;
        
    }
    else if (baralho_dois[0][atributoMaiorValor]<baralho_um[0][atributoMaiorValor]){
        texto_batalha.innerHTML=`<span>Você <span id="span_cor" style="color: green"> ganhou </span> esse round. Você <span id="span_cor" style="color: green"> ganha </span> "${baralho_dois[0].nome}"</span>`;
        console.log("Voce ganhou. Voce ganha a carta do Oponente");
        sairBaixo();
        baralho_um.push(baralho_dois[0]);
        baralho_um.push(baralho_um[0])
        baralho_dois.shift();
        baralho_um.shift();
        yourTurn = 1;
    }
    else if (baralho_dois[0][atributoMaiorValor]===baralho_um[0][atributoMaiorValor]){
        // texto_batalha.textContent="Empate. Sua vez:";
        console.log("Empate. ninguem ganha.");
        sairBaixo();
        baralho_um.push(baralho_um[0]);
        baralho_um.shift();
        baralho_dois.push(baralho_dois[0]);
        baralho_dois.shift();
        funcaoDesempate();
    }
    tamanhoDeckCartas();
}

function selecionarCaracteristica(){
    popUpFinal.style.display="block";
    atributoMaiorValor = this.value;

    console.log(baralho_dois[0])
    console.log(this.value)
    console.log(baralho_um[0][this.value])
    texto_batalha.textContent = `O atributo "${atributoMaiorValor}" do seu oponente é ${baralho_dois[0][atributoMaiorValor]}`;
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
        musicaFinal();
        document.body.style.backgroundImage = "url(./img/deck.png)";
        texto_batalha.style.display="none";
        fimJogo = 1;
        span_resultado.style.display="block";
        popUpFinal.style.display="block";
        span_resultado.innerHTML=`<p>Você perdeu</p> 
        <p id="textoFinal" style="font-size: 20px;">Dificuldade: ${dificuldade}</p>
        <p style="font-size: 30px;">Você diz: <p id="textoFinal" style="font-size: 30px;">${funcaoFrasesDerrota()}</p></p>` 
        ;
    }
    
    else if(baralho_dois.length<1){
        musicaFinal();
        document.body.style.backgroundImage = "url(./img/deck.png)";
        texto_batalha.style.display="none";
        fimJogo = 1;
        span_resultado.style.display="block";
        popUpFinal.style.display="block";
        span_resultado.innerHTML=`<p>Você ganhou</p><p style="font-size: 20px;">Dificuldade: ${dificuldade}</p>`;
        estrelasVitoria();
    }
    span_resultado.insertAdjacentHTML("beforeend",`<div><input id="botao_reiniciar" type="image" src=" ./botoes/botaoReiniciar.png" onclick="location.reload();"></input></div>`);
    
}

function tamanhoDeckCartas(){
    const div_deck = document.querySelector("#div_deck");
    div_deck.style.display="flex";
    div_deck.innerHTML="";
    
    if (baralho_um.length === 1) {
        div_deck.insertAdjacentHTML("beforeend", `<img src="./img/deck.png" id="img_deck_cartas">`);
    } 
    else if (baralho_um.length === 2) {
        div_deck.insertAdjacentHTML("beforeend", `<img src="./img/deck.png" id="img_deck_cartas">`);
        div_deck.insertAdjacentHTML("beforeend", `<img src="./img/deck.png" id="img_deck_cartas">`);
    } 
    else if (baralho_um.length >= 3 && baralho_um.length <6) {
        div_deck.insertAdjacentHTML("beforeend", `<img src="./img/deck25.png" id="img_deck_cartas">`);
    } 
    else if (baralho_um.length >= 6 && baralho_um.length <10) {
        div_deck.insertAdjacentHTML("beforeend", `<img src="./img/deck50.png" id="img_deck_cartas">`);
    } 
    else if (baralho_um.length >= 10 && baralho_um.length <13) {
        div_deck.insertAdjacentHTML("beforeend", `<img src="./img/deck75.png" id="img_deck_cartas">`);
    } 
    else if (baralho_um.length >= 13) {
        div_deck.insertAdjacentHTML("beforeend", `<img src="./img/deck100.png" id="img_deck_cartas">`);
    }
}

function preFaseOponente(){
    
    const div_batalha = document.querySelector("#div_batalha");
    const span_batalha = document.querySelector("#span_batalha");
    
    div_intro.style.display = "none";
    div_batalha.style.display="block";
    span_botoes_batalha.style.display = "none";
    texto_batalha.style.display="flex";
    texto_batalha.innerHTML = `${Oponente} está pensando...`;
    
    span_batalha.insertAdjacentHTML("beforeend", `<img src="./img/${baralho_um[0].id}.png" id="carta_um" class="imagem">`);
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
    span_botoes_batalha.insertAdjacentHTML("beforeend", `<div id="div_botao_batalha"> <input type="button" class = "botao_batalha" id ="botao_azedo" value="Azedo"> 
    <input type="button" class = "botao_batalha" id ="botao_carisma" value="Carisma">
    <input type="button" class = "botao_batalha" id ="botao_dodoi" value="Dodói">
    <input type="button" class = "botao_batalha" id ="botao_feio" value="Feio">
    <input type="button" class = "botao_batalha" id ="botao_resistenciaEtilica" value="Resistência Etílica">
    <input type="button" class = "botao_batalha" id ="botao_vagabundo" value="Vagabundo"> 
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

function inicioMusica() {
    var audio = document.getElementById("som");
    audio.muted = false; // Desativa o mudo, permitindo que o áudio seja ouvido
    audio.play();
 }
 
function musicaFinal() {
    var audio = document.getElementById("som");
    var player = document.getElementById("player");
    player.src = "musica2.mp3"
    audio.load(); // Recarrega o áudio
    audio.play(); // Inicia a nova música
}

function estrelasVitoria(){
    const pngsEstrela=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    
    const shuffle_pngsEstrela = pngsEstrela.sort((a, b) => 0.5 - Math.random());
    
    if (dificuldade==="Fácil"){
        span_resultado.insertAdjacentHTML("beforeend",
        `<img id="id_estrelas"src="./pngsEstrela/${pngsEstrela[0]}.png">`);
    }
    else if(dificuldade==="Médio"){
    span_resultado.insertAdjacentHTML("beforeend",
    `<span><img id="id_estrelas"src="./pngsEstrela/${pngsEstrela[0]}.png">
    <img id="id_estrelas"src="./pngsEstrela/${pngsEstrela[1]}.png"></span>`);
    }
    else{
    span_resultado.insertAdjacentHTML("beforeend",
    `<span><img id="id_estrelas"src="./pngsEstrela/${pngsEstrela[0]}.png">
    <img id="id_estrelas"src="./pngsEstrela/${pngsEstrela[1]}.png">
    <img id="id_estrelas"src="./pngsEstrela/${pngsEstrela[2]}.png"></span>`);
    }
}

function escolhaOponente(){
    const eliteFour = ["Inês","Aloísio","Vasco da Gama","Allan","Fogo Paulista","Miliciano de Saquaricá","Carteira de Trabalho", "Ex namorad..."];
    let roll = Math.floor(Math.random() * 8);
    Oponente = eliteFour[roll];
    
    span_intro.insertAdjacentHTML("beforeend",
    `<div> <p>Oponente: ${Oponente}.</p> <p>Prepare-se...</p></div>`);
    
}

function funcaoDesempate(){
    if (yourTurn === 0){
        yourTurn = 1;
        texto_batalha.innerHTML="Empate. Sua vez:";
    }
    else{
        yourTurn = 0;
        texto_batalha.innerHTML=`Empate. O turno passa para ${Oponente}`;
    }
}

function funcaoFrasesDerrota(){
    const frases = ["No futuro a gente vai ta rindo disso...","Odeio esse mongoloide","E o foda-se?" ]
    let roll = Math.floor(Math.random() * 3);
    return frases[roll];
}

function startDrinkGame(){
    
    div_intro.style.display = "none";
    span_batalha.innerHTML="";
    span_botoes_batalha.innerHTML="";
    popUpFinal.style.display="none";
    
    const shuffle_cartas = cartas.sort((a, b) => 0.5 - Math.random());
    baralho_um = cartas;
    
    span_batalha.innerHTML= `<img style="margin-top: 25px" src="./img/${baralho_um[0].id}.png" id="carta_um" class="imagem">`;
    entrarBaixo();
    span_batalha.insertAdjacentHTML("beforeend", 
    `<p><input style="margin-top: -10px" id="botao_reiniciar_drink" type="image" src=" ./botoes/botaoReiniciar.png" onclick="location.reload();"></input></p>`);
}