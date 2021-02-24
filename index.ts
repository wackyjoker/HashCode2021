import * as fs from "fs";

(async function(){
   // await console.log("hello");
    const file_A = "a_example";
   await pizzaBot(file_A);
})();

// const file_B = "b_little_bit_of_everything.in";
// pizzaBot(file_B);
function pizzaBot(file) {

    fs.readFile(file, "ASCII", function (err, data:string) {
        try {
            let trimStr = data.trim(); // make sure no space or /n at the end or the beginning. -- O(1)
            let arr = trimStr.split(/\n/g); //split each line into arrays.  -- O(n)
            const topList = arr.shift().trim().split(" "); // -- O(2n + 1)
            let T4person = topList.pop();  //O(1)
            let T3person = topList.pop();  //O(1)
            let T2person = topList.pop();  //O(1)
            let MpizzaNumber = topList.pop();        //O(1)                     //topList.shift();  O(n)
          //  console.log(teams);
            console.log(topList);
            const pizzaMap = new Map();

            console.log()
        } catch (err) {
            console.error(err);
        }

    });
}