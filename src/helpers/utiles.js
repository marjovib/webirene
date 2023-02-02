export const apiUrl = "https://api.irenevillalobos.es"
// export const apiUrl = "http://localhost:5000"



export const showMensaje = (elmensaje, color, elHtml, tiempo = 1) => {
    let colorMensaje
    if (color === 1) {
        colorMensaje = "text-blue-800"
    } else {
        colorMensaje = "text-red-400"
    }
    elHtml.classList.add(colorMensaje)
    elHtml.innerHTML = elmensaje;
    if (tiempo === 1) {
        setTimeout(() => {
            elHtml.innerHTML = "";
            elHtml.classList.remove(colorMensaje)
        }, 5000)
    }
}


export function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}