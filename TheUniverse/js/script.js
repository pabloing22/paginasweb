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


function irGaleria() {

    var principal=document.getElementById('principal_componente');
    var galeria=document.getElementById('galeria_componente');
    var galeriajs=document.getElementById('galeriajs_componente');

    if (principal.style.display!="none"){

        principal.style.display="none";    
        
    }else{
        galeriajs.style.display="none";
    }

    galeria.style.display="block";

}

function irGaleriajs() {
    console.log('jeje');
    var principal=document.getElementById('principal_componente');
    var galeriajs=document.getElementById('galeriajs_componente');

    if (principal.style.display=="none"){
        var galeria=document.getElementById('galeria_componente');
        galeria.style.display="none";

    } else {
        principal.style.display="none";
    }

    galeriajs.style.display="block";


}
