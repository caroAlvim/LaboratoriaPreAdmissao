const nome = prompt("Qual é o seu nome?")
const saudacao = document.getElementById("hello");

saudacao.innerHTML = `<p> Olá, ${nome}!<\p>`

function initGame() {
  let iniciar = prompt("Deseja inciar o jogo? \n 1-Sim \n 2-Não")
    if (iniciar == "1") {
      alert("Então vamos começar!");
      startGame()
    } else {
      alert("Ok! Até logo," + nome );
    }
}

// Inicia o jogo
function startGame(){
  // const listaCorretas = [];   
  // const listaErradas = [];

  const primeira = prompt("Pergunta 1 \n Qual é o nome do ator que interpreta Lúcifer na série da Netflix? \n A - Tom Ellis \n B - Tom Riddle \n C - Tom Ford") 
      if(primeira === "a") {
        // listaCorretas.push("Resposta 1")
        console.log("primeira")
        document.getElementById("resp_corretasUm").innerHTML += `<p>Resposta 1 <\p>`;
      } else {
        //const erradaUm = "Resposta 1"
        // listaErradas.push("Resposta 1")
        document.getElementById("resp_erradasUm").innerHTML += `<p>Resposta 1 <\p>`;
      };

  const segunda = prompt("Pergunta 2 \n Existem quantos protagonistas na série Friends? \n A - 3 \n B - 2 \n C - 6 ") 
      if(segunda === "c"){
        // listaCorretas.push("Resposta 2");
        document.getElementById("resp_corretasDois").innerHTML += `<p>Resposta 2<\p>`;
      } else {
        //const erradaDois = "Resposta 2"
        document.getElementById("resp_erradasDois").innerHTML += `<p>Resposta 2 <\p>`;
      }; 

  const terceira = prompt("Pergunta 3 \n Em que ano foi lançada a série Game of Thrones? \n A - 2010 \n B - 2008 \n C - 2020")
      if(terceira === "b"){
        //const respTres = "Resposta 3"
        //listaCorretas.push("Resposta 3"); 
        document.getElementById("resp_corretasTres").innerHTML += `<p> Resposta 3<\p>`;
      } else {
        //const erradaTres = "Resposta 3"
        //listaErradas.push("Resposta 3");
        document.getElementById("resp_erradasTres").innerHTML += `<p> Resposta 3 <\p>`;
      };
      //apresentar resultado final - acertos e erros
    // const respErradas = document.getElementById("resp_erradas");
    // const respCorretas = document.getElementById("resp_corretas");

    // respErradas.innerHTML = `<div> ${listaErradas}<\div>`;
    // respCorretas.innerHTML = `<div> ${listaCorretas}<\div>`;
}     
    
  initGame()   

 
