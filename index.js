"use strict";

var graph = require("./graph");
var myGraph = new graph();

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");

console.info("start from A:");
myGraph.dfs("A");

console.info("start from B");
myGraph.dfs("B");

console.info("start from C");
myGraph.dfs("C");

// myGraph.print();