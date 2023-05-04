


function verificarNumero() {

    let numeroIngresado = document.querySelector("#numeroUsuario")
    if (numeroIngresado.value == "") {
        disparaAlerta("Ingrese una cantidad", "error", "#f00505", "#000")
        numeroIngresado.classList.add("border", "border-danger")
    } else {
        document.querySelector("#resultado").innerHTML = (numeroIngresado.value % 2 == 0) ? "Tu numero es par" : "Tu numero es impar"
    }
    numeroIngresado.value = ""
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
          url("https://media.giphy.com/media/tu54GM19sqJOw/giphy.gif")
          left top
          no-repeat
        `
    })
    console.error(mensajeDeLaAlerta)
}
