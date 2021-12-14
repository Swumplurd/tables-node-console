const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, list = false, ends = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= ends; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${colors.yellow(base)} x ${colors.yellow(i)} = ${colors.green(base * i)}\n`;
    }

    if (list) {
      console.log("=============".red);
      console.log(" Tabla del", base);
      console.log("=============".red);
      console.log(consola);
    }

    /* 
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;

      console.log('El archivo se creo')
    })
    */

    fs.writeFileSync(`tablas/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
