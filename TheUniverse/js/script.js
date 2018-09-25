function leer() {

   var boton=document.getElementById ('botonbanner');
   var texto=document.getElementById ('lorem');

   if (boton.innerHTML=='LEER MÁS...'){

    texto.style.display="inline";
    boton.innerHTML="LEER MENOS";
   

   } else {

    texto.style.display="none";
    boton.innerHTML="LEER MÁS...";

   }
}


function ocultar() {

    var principal=document.getElementById('principal');

    principal.style.display="none";


}