function error404() {
    return {
        msg: "Recurso no existe",
        id: 404
    }
}

module.exports = { error404 }