const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/users', (req, res) => {
    res.status(200).json({
        users: [
            {
                name: 'nazir',
                email: 'nazir@gmail.com',
                id: 1
            }
        ]
    })
})

app.listen(3000, () => {
    console.log('app is listen on port 3000')
})

module.exports = { app }