function guardarNumero() {
    let numeroIngresado = document.querySelector("#numeroUsuario")
    if (numeroIngresado.value == "") {
        disparaAlerta("Ingrese una cantidad", "error", "#f00505", "#000")
        numeroIngresado.classList.add("border", "border-danger")
    } else {

        let sumatoria = 0
        for (let x = 1; x <= numeroIngresado.value; x++) {
            sumatoria = sumatoria + x
        }
        console.log(sumatoria)

        Swal.fire({
            icon: 'success',
            title: `El resultado es ${sumatoria}`,
        })
        numeroIngresado.value = ""
    }
}





function disparaAlerta(mensajeDeLaAlerta, icono, colorIcono, colorTexto) {
    Swal.fire({
        title: mensajeDeLaAlerta,
        width: 600,
        icon: icono,
        padding: '3em',
        iconColor: colorIcono,
        color: colorTexto,
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif")
          right bottom
          no-repeat
        `
    })
    console.error(mensajeDeLaAlerta)
}
