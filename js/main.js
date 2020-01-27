

let ubicacionPrincipal = window.pageYOffset;//0
AOS.init();

window.addEventListener("scroll" , function(){

    let desplazamientoActual = window.pageYOffset;//200
    if(ubicacionPrincipal>=desplazamientoActual){//0 > 100
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal=desplazamientoActual; //100

})

// Menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if (semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff",
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000",
        semaforo= false;
    }
    enlacesHeader.classList.toggle("menudos")
})