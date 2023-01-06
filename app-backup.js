
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(res);
    //console.log(req);
    res.writeHead(404)
    res.write('404 qw')
    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );
console.log('Escuchando en el puerto: 8080')