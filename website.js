import http from "http"
import fs from 'fs'

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    if (req.url == "/") {
        const home = '<h1 style="color:red;display: flex; justify-content: center; margin-top: 45vh;">Welcome to Home Page</h1>';
        res.end(home);
    }
    else if (req.url == "/about") {
        const about = '<h1 style="color:red;display: flex; justify-content: center; margin-top: 45vh;">Welcome to About Page</h1>';
        res.end(about);
    }
    else if (req.url == "/nodejs") {
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    }
})

server.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
})