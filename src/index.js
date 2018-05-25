function(){
    var formulario = document.getElementById('formulario'),
        elementos = formulario.elements,
        boton1 = document.getElementById('btn1'),
        boton2 = document.getElementById('btn2');

    var validarTexto = function (){
        if(formulario.encriptar.value == 0){
            alert("Ingresa su texto");
            }
        };
        
    var validar = function ()
    {
       validarTexto(); 
    };

    formulario.addEventListener("submit", validar);

}