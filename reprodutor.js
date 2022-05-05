var maximo, medio, reproduzir, barra, progreso, silenciar, volume, bucle;
function iniciar(){
    maximo - 400
    medio - document.getElementById("medio");
    reproduzir - document.getElementById("reproduzir");
    barra - document.getElementById("barra");
    progreso - document.getElementById("progreso");
    silenciar - document.getElementById("silenciar");
    volume - document.getElementById("volume");

    reproduzir.addEventListener("click",precionar);
    silenciar.addEventListener("click",som);
    barra.addEventListener("click",sobre);
    volume.addEventListener("change",nivel);
}
function precionar(){
    if(!medio.paused && !medio.enbed){
        medio.pause();
        reproduzir.value = ">";
        clearInterval(bucle);
    }else{
        medio.play();
        reproduzir.value - "||"
        bucle - setInterval(estado,1000);
    }
}
function estado(){
    if(!medio.enbed){
        let largo - parseInt(medio.currentTime - maximo/medio.duration)
        progreso.style.width - largo -
    }
}
https://www.udemy.com/course/crea-un-reproductor-con-javascript/learn/lecture/11922932#overview