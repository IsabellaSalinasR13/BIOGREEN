function open(num){
    document.getElementById('ventanita'+num).style.display="block";
}
function close(num){
    document.getElementById("ventanita"+num).style.display="none";
}

/*----------------------------------animación-----------------------------------------*/
function abrirAnimacion(numVentana){
    var ventana= document.getElementById(numVentana);

    ventana.classList.add('activar');
}
function cerrarAnimacion(numVentana){
    var ventana= document.getElementById(numVentana);

    ventana.classList.remove('activar');
}

var contenedor = document.getElementById("ventanita1")
function mostrarElementos(){
    var scrollPantalla = document.documentElement.scrollTop; 
    var alturaElemento = contenedor.offsetTop;

    if (alturaElemento -250 < scrollPantalla){
        document.getElementById("caja1").classList.add("centro");
    }

    if (alturaElemento -250 < scrollPantalla){
        document.getElementById("caja2").classList.add("centro");
    }
}
window.addEventListener("scroll", mostrarElementos);