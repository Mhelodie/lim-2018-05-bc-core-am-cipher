window.cipher = {
  encode : (offset,string) => {
  offset = parseInt(offset); //Conversión de los saltos en enteros
  let cipherEncode = ""; //  Es la variable que almacena el cifrado
  for (i=0; i<string.length; i++) //Creando el bucle para recorrer cada letra de lo que se desea cifrar
  { let codeAscii = string.toUpperCase().charCodeAt(i);
    if (codeAscii === 32) {
        let space = " ";
      cipherEncode += space; //+= Es agregar la variable 
    }
    else {
     let charNumber = codeAscii - 65;
         charNumber = ((charNumber + parseInt(offset)) % 26 )+65;
         cipherEncode += String.fromCharCode(charNumber);
    }
  }
    return cipherEncode;
  },
  
  decode : (offset,string) =>{
      offset = parseInt(offset); //Conversión de los saltos en enteros
      let cipherDecode = ""; //  Es la variable que almacena el cifrado
      for (i=0; i<string.length; i++) //Creando el bucle para recorrer cada letra de lo que se desea cifrar
      { let codeAscii = string.charCodeAt(i);
        if (codeAscii === 32) {
            let space = " ";
          cipherEncode += space; //+= Es agregar la variable 
        }
        else {
         let charNumber = codeAscii + 65;
             charNumber = ((charNumber - parseInt(offset)) % 26 )+65;
             cipherEncode += String.fromCharCode(charNumber);
        }
      }
        return cipherDecode;
    }
};
