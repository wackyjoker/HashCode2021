 class Road {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node,start,end,time)  {
        this.adjacentList[node] = {direct:[start,end],time};
        this.numberOfNodes++;
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            // let vertex;
            // for (vertex of nodeConnections) {
            //     connections += vertex + " ";
            // }
            console.log(node + "-->" + nodeConnections.direct,"takes ",nodeConnections.time);
        }
    }
}

module.exports = Road;