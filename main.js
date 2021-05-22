
let nome = prompt("Qual é o seu nome?") // vai perguntar o nome na tela
document.write("Olá, " + nome)

let iniciar = prompt("Deseja inciar a prova?\n 1 Sim \n 2 Não") //vai perguntar ok ou cancel
  if (iniciar == "1") {
    const sim = alert("Então vamos começar!");
   
    const listaCorretas = new Array(
    );
    
    const listaErradas = new Array(
    );
    
    let primeira = prompt("Pergunta 1 \n Qual é o nome do ator que interpreta Lúcifer na série da Netflix? \n A - Tom Ellis \n B - Tom Riddle \n C - Tom Fords") 
      if ((primeira == "a" || "A" )){
        primeira = document.write("Resposta 1 correta");
         listaCorretas.push(primeira);
        //let correta1 = document.getElementById("primeira");  
        //let respostaUm = document.innerHtml("Resposta 1 correta");
      } else {
        primeira = document.innerHtml("Resposta 1 errada");
        listaErradas.push(primeira);
      }
       
   //console.log(correta1.innerHTML) 

     //else if ((primeira !== A))
        //document.write ()

    let segunda = prompt("Pergunta 2 \n Existem quantos protagonistas na série Friends? \n a - 1 \n b - 2 \n c - 6 ") 
     if ((segunda == "c"|| "C")){
      
      segunda = document.write ("Resposta 2 correta");
       listaCorretas.push(segunda);
     } else {
      segunda = document.write ("Resposta 2 errada")
       listaErradas.push(segunda);
     }
    

    let terceira = window.prompt("Pergunta 3 \n Em que ano foi lançada a série Game of Thrones? \n a - 2010 \n b - 2008 \n c - 2020")
     if (terceira == "b" || "B"){
      terceira = document.write ("Resposta 3 correta")
       listaCorretas.push(terceira);
       
     } else {
      terceira = document.write ("Resposta 3 errada");
       listaErradas.push(terceira);
     }
    
    document.write(listaCorretas, listaErradas);
 
    
    else  {
    var nao = window.alert( "Ah, q pena... Até logo!");
  }

    //jogar
  //} else {
   // mensagemSair
 // }





    //ir para a funçao jogar
    //document.write 
   // else
        // apresentar a mensagem de até logo e sair do programa

//function jogar(nome, ) {
    // colocar nome do jogador
    // iniciar perguntas
    // Pergunta 1 - Qual é o nome do ator que interpreta Lúcifer na série da Netflix?
    //a - Tom Ellis, b - Tom Riddle,  3 - Tom Ford
      //2 - Existem quantos protagonistas na série Friends?
      // a - 1 , b - 2, c - 6
      //3 - Em que ano foi lançada a série Game of Thrones?
      //a - 2010, b - 2008, c - 2020

    //apresentar resultado final - acertos e erros
    
 // } 

 // function mensagemSair {
  //let xau = window.prompt("Você deseja mesmo sair?") 
 //}
