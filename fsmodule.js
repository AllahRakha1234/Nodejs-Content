const fs = require("fs")

// READ UNBLOCKALY / ASYNCHROUSLY
// fs.readFile("file.txt", "utf8", (err, data) => {
//     if (!err) {
//         console.log("Step 1");
//         console.log(data);
//     }
// })
// console.log("Finished reading file.");

// READ BLOCKALY / SYNCHROUSLY
// const fileRead = fs.readFileSync("file.txt");
// console.log(fileRead.toString());
// console.log("Finished reading file using ReadSync.");

// WRITE UNBLOCKALY / ASYNCHROUSLY
fs.writeFile("file.txt", "This is the data to write.", () => {
    console.log("Step 1");
})
console.log("Finished writting file.");

// WRITE BLOCKALY / SYNCHROUSLY
fs.writeFileSync("file.txt", "This is the data to write again.",);
console.log("Finished writting file.");