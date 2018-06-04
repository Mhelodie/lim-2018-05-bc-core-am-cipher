window.cipher = {
  //Creación de la función encode y el parametro
  encode : (offset,string) => {
  //Conversión de los saltos a enteros
  offset = parseInt(offset); 
  //Es la variable que almacena el cifrado
  let cipherEncode = "";
  //Creando el bucle para capturar cada letra de lo que se desea cifrar
  for (let i=0;  i<string.length; i++){
   let codeAscii = string.toUpperCase().charCodeAt(i);
    if (codeAscii === 32) {
        let space = " ";
      //+= Es  agregar la variable
      cipherEncode += space;  
    }
    else {
     let charNumber = codeAscii - 65;
         charNumber = ((charNumber + parseInt(offset))% 26)+65;
         cipherEncode += String.fromCharCode(charNumber);
    }
  }
    return cipherEncode;
  },
  
   decode : (offset,string) => {
    //Conversión de los saltos en enteros 
    offset = parseInt(offset); 
      let cipherDecode = ""; //Es la variable que almacena el cifrado
      for (let i=0; i<string.length; i++) //Creando el bucle para recorrer cada letra de lo que se desea cifrar
      { let codeAscii = string.toUpperCase().charCodeAt(i);
        if (codeAscii === 32) {
            let space = " ";
          cipherDecode += space; //+= Es agregar la variable 
        }

        else {
         let charNumber = codeAscii + 65;
             charNumber = ((charNumber - parseInt(offset))%26)+65;
             cipherDecode += String.fromCharCode(charNumber);
        }
      }
        return cipherDecode;
    }
};