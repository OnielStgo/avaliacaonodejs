const express = require('express')
const router = require('./src/routes/calculadora')

const app = express()

app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})