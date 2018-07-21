//requireds
const fs = require('fs'); //Require to integrated package node
//const express = require('express') //Amplied package node not integrated
//const myfile = require('./myfile') //Require to my files
const colors = require('colors');


//listar en consola
let listar = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) return console.log('Verifique que la base y el limite sea un numero')

    console.log('====================================='.green);
    console.log(`Tabla del ${base}`);
    console.log('====================================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {
        let data = '';
        //Validamos que la base sea un numero
        if (!Number(base)) {
            rej(`El valor introducido [${base}] no es un numero`)
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                rej(err);
            else
                res(`tabla-${base}-al-${limite}.txt`.blue);
        })

    })


}

//Exportamos los metodos | funciones
module.exports = {
    crearArchivo,
    listar
}