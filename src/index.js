// Declarar las varibles de los elementos del HTML según el ID
let offset = document.getElementById('saltos');
let string = document.getElementById('mensaje');
let btn_cifrar = document.getElementById('btnEnc');
let btn_descifrar = document.getElementById('btnDes');
let btnLim = document.getElementById('btnLim');

//Creación del evento cifrar.
btn_cifrar.addEventListener('click', () => {
  //Devuelve lo generado pora la función encode y lo guarda en la variable output.
  let output = window.cipher.encode(offset.value,string.value);
  //La información del output se almacena en elemento HTML que tiene como ID: resultado.
  document.getElementById('resultado').innerHTML = output;
});

//Creación del evento descifrar.
btn_descifrar.addEventListener('click', () => {
  let output = window.cipher.decode(offset.value,string.value);
  document.getElementById('resultado').innerHTML = output;
});

//Creación del evento limpiar.
btnLim.addEventListener('click', () => {
document.getElementById('mensaje').value = "";
document.getElementById('saltos').value = "";
document.getElementById('resultado').innerHTML="";
});