const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".btn-copiar");
const parrafoMensaje = document.querySelector(".parrafo-mensaje")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
    parrafoMensaje.style.visibility="hidden";
    botonCopiar.style.visibility="visible";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a","ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptado=stringEncriptado.toLowerCase();

    for (let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    
}
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter", "e"], ["imes", "i"],["ai","a"], ["ober", "o"], ["ufat", "u"] ];
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for (let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptado;
}

function btnCopiar(){
    // Selecciona el textarea
    var mensajeCopiado = document.querySelector(".mensaje");
    // Selecciona el texto dentro del textarea
    mensajeCopiado.select();
    mensajeCopiado.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Opcional: mensaje de confirmación
    //alert("Texto copiado: " + mensajeCopiado.value);
}