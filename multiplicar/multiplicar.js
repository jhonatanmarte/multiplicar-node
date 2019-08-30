const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor Introducido ${base} no es valido`);
            return;
        }

        console.log('================'.yellow);
        console.log(`Tabla del ${base}`.red.bgYellow);
        console.log('================'.yellow);
        let total = '';

        for (let index = 1; index <= limite; index++) {

            total += (` ${base} * ${index} = ${index * base}\n`);

        }
        console.log(total);
        // fs.writeFile(`tablas/tabla-${base}.txt`, total, (err) => {
        //     if (err)
        //         reject(err)
        //     else
        //         resolve(`tabla-${ base }.txt`);


        //     });
    })

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor Introducido ${base} no es valido`);
            return;
        }

        let total = '';

        for (let index = 1; index <= limite; index++) {

            total += (` ${base} * ${index} = ${index * base}\n`);

        }

        fs.writeFile(`tablas/tabla-${base}by${limite}.txt`, total, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }by${limite}.txt`.cyan);


        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}