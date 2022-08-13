function encriptarTexto(text){
    return text
    .replaceAll("e", "enter") 
    .replaceAll("i", "imes") 
    .replaceAll("a", "ai") 
    .replaceAll("o", "ober") 
    .replaceAll("u", "ufat");
}

function desencriptarTexto(text){
    return text
    .replaceAll("enter", "e") 
    .replaceAll("imes", "i") 
    .replaceAll("ai", "a") 
    .replaceAll("ober", "o") 
    .replaceAll("ufat", "u");
}

var botonDesencriptar = document.getElementById("desencriptar");

var textarea = document.getElementById("text-area");
var parrafo = document.getElementById("parrafo");

var inicial = document.getElementById("inicial");
var final = document.getElementById("final");

final.style.display = "none" 

var botonEncriptar = document.getElementById("encriptar");

botonEncriptar.addEventListener('click',() => {
    parrafo.value = encriptarTexto(textarea.value) 
    inicial.style.display = "none";
    final.style.display = "flex";
})

botonDesencriptar.addEventListener('click',() => {
    parrafo.value = desencriptarTexto(textarea.value)
    initial.style.display = "none";
    final.style.display = "flex";
})