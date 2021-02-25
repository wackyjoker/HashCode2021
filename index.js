const fs = require("fs");

class Cars{
    constructor(startAt,...roads) {
        this.startAt = startAt;

    }
}
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node)  {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        //uniderected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
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

        const myGraph = new Graph();
        let carList = getCars(cars,dataList);
        console.log(carList);
         console.log(dataList);

    });
};

(async function(){
    const file_A = "in/a.txt";
    main(file_A);
})()
