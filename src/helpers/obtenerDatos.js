import data from "../data/data.json";

export const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 200)
    })
}

export const obtenerId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === Number(id));

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}