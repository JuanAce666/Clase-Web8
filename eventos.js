let p2 = document.querySelector(".p2");
/*p2.addEventListener( "click", function(){
    alert("Buenas");
} );*/
p2.addEventListener("click", saludo);
function saludo(){
    alert("Hola")
}
p2.removeEventListener("click", saludo);


let boton = document.querySelector(".icon");
boton.addEventListener("click, function (){
    let menu = document.querySelector("#myNavbar");
});

let botones = document.querySelectorAll(".accordion");
for(let x =0; x < botones.length; x++){
    botones[x].addEventListener("click", function(){
        let paneles = document.querySelectorAll(".panel");
        if(paneles[x].style.display == "block"){
            paneles[x].style.display = "none";
        }else{
            paneles[x].style.display = "block";
        }
    })
}