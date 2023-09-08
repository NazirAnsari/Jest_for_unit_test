const promisesTest = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a - b > 0) {
            resolve('+ve')
        }
        else {
            reject('-ve')
        }
    })
}

module.exports = { promisesTest }