



  let imagen  = document.querySelector("#imagenParteUno");
imagen.addEventListener("click", function() {
    if (imagen.style.border == "2px solid red")
    {imagen.style.border = "none"; }

    else {
        
        imagen.style.border = "2px solid red"; 
        
        
    }
    
  })


  let comporbar  = document.querySelector("#verificar");
  
  function comprobarTotal (){
    let stiker1 = document.querySelector("#stiker1").value;
    let stiker2 = document.querySelector("#stiker2").value;
    let stiker3 = document.querySelector("#stiker3").value;
    let stiker4 = document.querySelector("#stiker4").value;

    let total =  +stiker1 + +stiker2 + +stiker3 + +stiker4;

    if ( total <=10) { document.querySelector("#resultadoVerificar").innerHTML = "llevas " + total;}

    else { document.querySelector("#resultadoVerificar").innerHTML = "Levas denasiados stikers";}
    




  }

  comporbar.addEventListener("click", comprobarTotal)





  let comprobarP3 = document.querySelector("#comprobarPin");

function comprobarElTotal (){
    let pin1 = document.querySelector("#pinUno").value;
    let pin2 = document.querySelector("#pinDos").value;
    let pin3= document.querySelector("#pinTres").value;
    


    let total2 = pin1 + pin2 + pin3;
    console.log(total2);
    if (total2 == "911" ) {document.querySelector("#resultadoComprobacion").innerHTML = "Password 1 correcto"}
    

    else if (total2 == "714") {document.querySelector("#resultadoComprobacion").innerHTML = "Password 2 correcto"}

    else  {document.querySelector("#resultadoComprobacion").innerHTML = "Password Incorrecto"}
    
}

comprobarP3.addEventListener("click", comprobarElTotal)
