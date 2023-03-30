require('colors')
const fs = require('fs');

const crearArchivo = (base = 5, listar, hasta) => {
    return new Promise((resolve, reject) => {
        let salida = "";
        let consola = "";
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
        }
        if(listar){
            console.log("======================".magenta)
            console.log(`     TABLA DEL ${base}`.cyan)
            console.log("======================".magenta)
            console.log(consola);
        }
        
        try {
            let nombreArchivo =`./salida/tabla-${base}.txt`
            fs.writeFileSync(nombreArchivo, salida);
            resolve(`tabla-${base}.txt`);
        } catch (err) { 
            throw err
        }
    })

}

module.exports = {
    crearArchivo
}