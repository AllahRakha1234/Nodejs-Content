import http from "http"

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Request has been sent to server.<h1/>");
})

server.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
})