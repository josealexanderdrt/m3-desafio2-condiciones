const h2A = document.getElementById("a");
const h2B = document.getElementBuId("b");
const h2c = document.querySelector("#c");
const h2D = document.querySelecton("#d");
const h2Key = document.getElementById("key");


const changeColor = (e) => {
e.target.style.color = "green";};


h2A.addEventListener("click", changeColor);
h2B.addEventListener("click", changeColor); 
h2C.addEventListener("click", changeColor);
h2D.addEventListener("click", changeColor);

document.addEventListener("keydown", function (event){
    if (event.key === "a") { h2Key.style.color = "purple";
    }else if( event.key === "s"){h2Key.style.color = "blue";

    }


})

function creatNewH2(color){
    const newH2 = document.createElement("h2")
    newH2.style.fontSize = "50px";
    newH2.style.padding = "50px";
    newH2.style.margin = "50px";
    newH2.style.textAlign = "center";

    // crear un texto 

const newContent


}