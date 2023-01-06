
let estadoLicuadora = "apagado";

let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-sound-button");
let licuadora = document.getElementById("blender");
let titulo = document.getElementById("titulo");

function controlarLicuadora(){

    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "encendido";
        hacerSonido();
        licuadora.classList.add("active");
        titulo.innerText = "Apague la licuadora";
    } else {
        estadoLicuadora = "apagado";
        hacerSonido();
        licuadora.classList.remove("active");
        titulo.innerText = "Encienda la licuadora";
    }
}

function hacerSonido() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}