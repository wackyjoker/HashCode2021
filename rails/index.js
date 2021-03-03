const fs = require("fs");
const Road = require("./graph");
class Cars{
    constructor(startAt,...roads) {
        this.startAt = startAt;

    }
}

function getCars(carNum,list){
    let carList=[];
    let counter = 0;
    let index = list.length;
    let remain = list.length-carNum;
    for(let i=index;i>remain;i--){
        console.log("debug :",i);
        carList[counter]= list.pop();  //O(1+1)
        counter++  // O(1)
    }
    return carList;
}

async function main(file){
    await fs.readFile(file, "ASCII", function(err, data) {
        let trimStr = data.trim(); // make sure no space or /n at the end or the beginning.
        let dataList = trimStr.split(/\n/g); //split each line into arrays.
        let firstLine = dataList.shift().split(" "); // get the first line data from input array.
        let [time,intersections,streets,cars,scores] = firstLine;
        const street = new Road();
        let carList = getCars(cars,dataList);
        console.log(carList);
        console.log(dataList);
        for(vertex of dataList) {
            let [start,end,name,time] = vertex.split(" ");
            street.addVertex(name,start,end,time);
        }
        street.showConnections();
    });
}

(async function(){
    const file_A = "in/a.txt";
    await main(file_A);
})()
