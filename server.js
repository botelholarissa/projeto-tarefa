const app = require('./src/app');
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`O servidor está rodando http://localhost:${PORT}`)
})