function validar (){
    var encriptar = document.getElementById("encriptar").value;
    if (encriptar === ""){
        alert("El Ingrese su texto");
    }
}

let btnLim = document.getElementById('btnLim');
btnLim.addEventListener('click', () => {
document.getElementById('encriptar').value = "";
document.getElementById('desencriptar').value = "";
document.getElementById('resultado').value="";
});