

let btn_cifrar = document.getElementById('btnEnc');
let offset = document.getElementById('saltos');
let string = document.getElementById('mensaje');
btn_cifrar.addEventListener('click', function(){
   let output = window.cipher.encode(offset.value,string.value);
    document.getElementById('resultado').innerHTML = output;
})
/*
let btn_descifrar = document.getElementById('btnDes');
let offset = document.getElementById('saltos');
let string = document.getElementById('mensaje');
btn_cifrar.addEventListener('click', function(){
   let output = window.cipher.encode(offset.value,string.value);
    document.getElementById('resultado').value = output;
})

let btnLim = document.getElementById('btnLim');
btnLim.addEventListener('click', () => {
document.getElementById('encriptar').value = "";
document.getElementById('desencriptar').value = "";
document.getElementById('resultado').value="";
})

function validar (){
    var encriptar = document.getElementById("mensaje").value;
    if (encriptar === ""){
        alert("El Ingrese su texto");
    }
}
*/