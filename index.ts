import * as fs from "fs";

class Team{
    private _teams:number;
    private _teamSize:number;
    constructor(teams:number,teamSize:number) {
        this._teams = teams;
        this._teamSize=teamSize;
    }
    get teams(){
        return this._teams;
    }
    get teamSize(){
        return this._teamSize
    }
    givePizza(){
        if(this._teams>0){
            this._teams--;
            console.log("we just gave a pizza");
        } else {
         return false;
        }
    }

}

class Delivery{
    constructor(){

    }
    deliver(){

    }
}

(async function(){
   // await console.log("hello");
    const file_A = "in/a_example";
   await pizzaBot(file_A);
})();

// const file_B = "b_little_bit_of_everything.in";
// pizzaBot(file_B);

function delivery(pizza:number,t4:Team,t3:Team,t2:Team){

    while(pizza>0) {
        switch (pizza > 0) {
            case pizza - t4.teamSize >= 2 :
                pizza = pizza - t4.teamSize;
                console.log("t4 got a pizza , got " + pizza + "left");
                t4.givePizza();
                break;
            case pizza - t3.teamSize >= 1:
                pizza = pizza - t3.teamSize;
                console.log("t3 got a pizza , got " + pizza + "left");
                t3.givePizza();
                break;
            case pizza - t2.teamSize >= 0:
                pizza = pizza - t2.teamSize;
                console.log("t2 got a pizza , got +pizza +left");
                t2.givePizza()
                break;
            default:
                console.log("something went wrong");
        }
    }
    return [pizza,t4.teams,t3.teams,t2.teams];
}


function pizzaBot(file:string) {

    fs.readFile(file, "ASCII", function (err, data:string) {
        try {
            let trimStr = data.trim(); // make sure no space or /n at the end or the beginning. -- O(1)
            let arr:string[] = trimStr.split(/\n/g); //split each line into arrays.  -- O(n)
            const topList:number[]|undefined = arr.shift()?.trim().split(" ").map(x=>+parseInt(x,10)); // -- O(3n + 1)
            let T4person = new Team(topList!.pop()!,4);  //O(1+1)
            let T3person = new Team(topList!.pop()!,3);  //O(1)
            let T2person = new Team(topList!.pop()!,2);  //O(1)
            let Mpizza:number = topList!.pop()!;        //O(1)                     //topList.shift();  O(n)
          //  console.log(teams);
          const  result = delivery(Mpizza,T4person,T3person,T2person);
            console.log(result);
        } catch (err) {
            console.error(err);
        }

    });
}


