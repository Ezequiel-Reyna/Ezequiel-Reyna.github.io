var botonCopiar = document.getElementById("copiar");

function copiarTexto() {
    parrafo.select();
    navigator.clipboard.writeText(parrafo.value);
}

botonCopiar.addEventListener('click', () => {
    copiarTexto();
    botonCopiar.innerText = "Texto copiado!"
    setTimeout(()=>{
        botonCopiar.innerText = "Copiar"
    }, 1000)
})