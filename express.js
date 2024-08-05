import express from "express";
import fs from "fs"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const home = '<h1 style="color:red;display: flex; justify-content: center; margin-top: 45vh;">Home Page</h1>';
    res.send(home);
})

app.get("/about", (req, res) => {
    const about = '<h1 style="color:red;display: flex; justify-content: center; margin-top: 45vh;">About Page</h1>';
    res.send(about)
})

app.get("/nodejs", (req, res) => {
    const data = fs.readFileSync("index.html");
    res.send(data.toString());
})

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
})