import * as fs from "fs";

class Team{
    private _teams:number|undefined;
    teamMembers:number;
    constructor(teams:number|undefined,teamMembers:number) {
        this._teams = teams;
        this.teamMembers=teamMembers;
    }
    get teams(){
        return this._teams;
    }

}



(async function(){
   // await console.log("hello");
    const file_A = "a_example";
   await pizzaBot(file_A);
})();

// const file_B = "b_little_bit_of_everything.in";
// pizzaBot(file_B);
function pizzaBot(file:string) {

    fs.readFile(file, "ASCII", function (err, data:string) {
        try {
            let trimStr = data.trim(); // make sure no space or /n at the end or the beginning. -- O(1)
            let arr:string[] = trimStr.split(/\n/g); //split each line into arrays.  -- O(n)
            const topList:number[]|undefined = arr.shift()?.trim().split(" ").map(x=>+parseInt(x,10)); // -- O(3n + 1)
            let T4person = new Team(topList!.pop(),4);  //O(1+1)
            let T3person = new Team(topList!.pop(),3);  //O(1)
            let T2person = new Team(topList!.pop(),2);  //O(1)
            let Mpizza:number = topList!.pop()!;        //O(1)                     //topList.shift();  O(n)
          //  console.log(teams);
            if(Mpizza -T4person.teamMembers >= 2){

            };
            const pizzaMap = new Map();

            console.log()
        } catch (err) {
            console.error(err);
        }

    });
}


