const fs = require("fs");

let time;
let intersections;
let streets;
let cars;
let scores;
(async function(){
    const file_A = "in/a.txt";
    main(file_A);
})()


async function main(file){
    await fs.readFile(file, "ASCII", function(err, data) {
        let trimStr = data.trim(); // make sure no space or /n at the end or the beginning.
        let arr = trimStr.split(/\n/g); //split each line into arrays.
         console.log(arr);
    });
};

console.log("hello")