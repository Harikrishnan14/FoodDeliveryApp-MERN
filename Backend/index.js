const express = require('express')
const connectToDB = require('./db')
var cors = require('cors')
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())

connectToDB()

app.use('/api/', require('./Routes/CreateUser'))
app.use('/api/', require('./Routes/DisplayData'))
app.use('/api/', require('./Routes/OrderData'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})