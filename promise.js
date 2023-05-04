



const NumeroEjercicio = new Promise((resolve, reject) => {

    let N = 0

    if (N === 0) { 
        return resolve({ res: "cero"})
    } else if (N % 2 == 0){
        return resolve("par")
    } else {
        return reject("Impar")
    }

});



NumeroEjercicio 

    .then((data) => {
        console.log(data)
    })

    .catch((error) => {
        console.log(error)
    })

