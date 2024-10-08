const http = require('http')

//Creo el server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola mundo!\n');
})

//Inicio server en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Escuchando el puerto 3000');
});

