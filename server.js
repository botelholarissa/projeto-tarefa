const app = require('./src/app')

const PORT = 5000

app.listen(PORT, (request, response) => {
    console.log(`O server-reprograma-blog está rodando na porta ${PORT}`)
})