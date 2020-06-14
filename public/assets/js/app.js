const fs = require("fs");
const appendFileSync = util.promisify(fs.appendFile);

/// needs NOTE  write "POST" to db.json so that I can read "GET" NOTE from list

let dataJSON = { ...data };
let appendFile = appendFileSync("", dataJSON);
