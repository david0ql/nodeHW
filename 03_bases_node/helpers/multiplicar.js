const fs = require('fs');

const createFile = async (number = 5, listar = false) => {

    try {
      
      let salida = '';

      for (let index = 1; index <= 10; index++) {
        salida += `${ number } * ${ index } = ${ number*index } \n`;    
      }
      
      fs.writeFileSync(`tabla-${ number }.txt`, salida);

      return (listar == true) ? salida :  "tabla creada";

    } catch (error) {

      throw error;

    }
    
}

module.exports = {
  createFile
}