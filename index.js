// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const express = require("express")
const app = express()
app.listen(3000,console.log("sserver running on 3000"))
