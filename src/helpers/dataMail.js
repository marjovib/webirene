import {apiUrl} from "./utiles.js";


export const newSuscriber = (dataSuscriber) => {
    return fetch(apiUrl + "/newSuscriber", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            "Content-Type": "application/json",

        },
        body: JSON.stringify(dataSuscriber),
    })
        .then((res) => res.json())
        .then((data) => {
            return data

        })
        .catch((err) => {
            return {'respuesta': 'Ha ocurrido un error intentalo más tarde', 'codigo': 1}
        });

}


export const deleteSuscriber = (dataSuscriber) => {
    return fetch(apiUrl + "/deleteSuscriber", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSuscriber),
    })
        .then((res) => res.json())
        .then((data) => {
            return data

        })
        .catch((err) => {
            return {'respuesta': 'Ha ocurrido un error intentalo más tarde', 'codigo': 1}
        });

}

export const mailWeb = (formMail) => {
    return fetch(apiUrl + "/mailWeb", {
        method: "POST",
        headers: {},
        body: formMail,
    })
        .then((res) => res.json())
        .then((data) => {

            return data
             })
        .catch((err) => {
            return {'respuesta': 'Ha ocurrido un error intentalo más tarde', 'codigo': 1}

        });

}
