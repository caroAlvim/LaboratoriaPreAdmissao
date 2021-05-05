let nome = prompt("Qual é o seu nome?") // vai perguntar o nome na tela
document.write("Olá, " + nome)

let iniciar = prompt("Deseja inciar a prova?\n 1 Sim \n 2 Não") //vai perguntar ok ou cancel
  if ((iniciar == 1)) {
    var sim = alert("Então vamos começar!");

    let primeira = prompt("Pergunta 1 \n Qual é o nome do ator que interpreta Lúcifer na série da Netflix? \n A - Tom Ellis \n B - Tom Riddle \n C - Tom Fords") 
      if ((primeira == "a" )){
        //let correta1 = (document.getElementById("primeira").innerHTML)  
        document.innerHtml("Resposta 1 correta")
      } else {
        document.innerHtml("Resposta 1 errada")
      }
       
   //console.log(correta1.innerHTML) 

     //else if ((primeira !== A))
        //document.write ()

    let segunda = prompt("Pergunta 2 \n Existem quantos protagonistas na série Friends? \n a - 1 \n b - 2 \n c - 6 ") 
     if ((segunda == "c")){
      document.write ("Resposta 2 correta")
     } else {
      document.write ("Resposta 2 errada")
     }
    

    let terceira = window.prompt("Pergunta 3 \n Em que ano foi lançada a série Game of Thrones? \n a - 2010 \n b - 2008 \n c - 2020")
     if ((terceira == "b")){
      document.write ("correta")
     } else {
      document.write ("errada")
     }
    

  
    
    
     if ((terceira == "b")){
      document.write ("Resposta 3 correta")
     } else {
      document.write ("Resposta 3 errada")
     }
    
    else  {
    var nao = window.alert( "Ah, q pena... Até logo!");
  }
