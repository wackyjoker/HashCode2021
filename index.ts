import * as fs from "fs";


function scanBooks(file) {

    fs.readFile(file, "ASCII", function(err, data) {
        let trimStr = data.trim(); // make sure no space or /n at the end or the beginning.
        let arr = trimStr.split(/\n/g); //split each line into arrays.

    })
}