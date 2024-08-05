
// MOUDLE WRAPPER FUNCTION
// (function (exports, require, module, __filename, __dirname) {


const obj = {
    name: "Ali",
    age: 22,
    rollNo: 34
};

console.log(exports, require, module, __filename, __dirname); // MOUDLE WRAPPER PARAMETERS


module.exports = obj; // EXPORTING OBJECT

// })