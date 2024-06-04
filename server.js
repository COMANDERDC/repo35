const http = require('http');
const PORT = 3000;

const server = http.createServer((req,res) => {
    const currentDate = new Date().toLocaleString();
    const clientIP = req.connection.remoteAddress;

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<h1>Hello World!</h1>`);
    res.write(`<p>Your IP address -> ${clientIP}</p>`);
    const clientDateTime = new Date().toLocaleString('pl-PL',{timeZone:'Europe/Warsaw'});
    res.write(`<p>Aktualna data i godzina w Twojej strefie czasowej -> ${clientDateTime}</p>`);
    res.end();
});

server.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});
