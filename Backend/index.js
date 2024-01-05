const express = require('express')
const connectToDB = require('./db')
const app = express()
const port = 5000
app.use(express.json())

connectToDB()

app.use('/api/', require('./Routes/CreateUser'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})