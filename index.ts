import * as fs from "fs";

(async function(){
   await console.log("hello");
    const file_A = "a_example";
   await pizzaBot(file_A);
})();

// const file_B = "b_little_bit_of_everything.in";
// pizzaBot(file_B);
function pizzaBot(file) {

    fs.readFile(file, "ASCII", function(err, data) {
        try {
            console.log(data);
            let trimStr = data.trim(); // make sure no space or /n at the end or the beginning.
            let arr = trimStr.split(/\n/g); //split each line into arrays.
        } catch (err) {
            console.error(err);
        }


    })
}