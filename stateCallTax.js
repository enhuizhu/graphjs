"use strict";
var graph = require("./graph");
var usGraph = new graph();

var obj = {
	generateMap: function() {
	    usGraph.addEdgeArr("NY", ["PA"]);
	    usGraph.addEdgeArr("PA", ["WV", "VA", "OH"]);
	    usGraph.addEdgeArr("OH", ["IN", "KY"]);
	    usGraph.addEdgeArr("WV", ["OH", "KY"]);
	    usGraph.addEdgeArr("VA", ["NC", "WV"]);
	    usGraph.addEdgeArr("IN", ["IL", "KY"]);
	    usGraph.addEdgeArr("IL", ["W1", "IA", "MO"]);
	    usGraph.addEdgeArr("W1", ["MN", "IA"]);
	    usGraph.addEdgeArr("IA", ["MN", "MO", "NE"]);
	    usGraph.addEdgeArr("MN", ["ND", "SD", "IA"]);
	    usGraph.addEdgeArr("MO", ["IA", "AR", "KS"]);
	    usGraph.addEdgeArr("AR", ["MO", "LA", "OK"]);
	    usGraph.addEdgeArr("LA", ["TX", "AR"]);
	    usGraph.addEdgeArr("ND", ["MT", "SD"]);
	    usGraph.addEdgeArr("SD", ["MT", "WY"]);
	    usGraph.addEdgeArr("NE", ["WY", "CO"]);
	    usGraph.addEdgeArr("KS", ["CO"]);
	    usGraph.addEdgeArr("OK", ["TX", "NM", "KS"]);
	    usGraph.addEdgeArr("TX", ["NM"]);
	    usGraph.addEdgeArr("MT", ["WA","ID", "WY"]);
	    usGraph.addEdgeArr("WY", ["MT","ID", "UT"]);
	    usGraph.addEdgeArr("WY", ["MT","ID", "UT"]);
	    usGraph.addEdgeArr("CO", ["WY", "UT", "NM"]);
	    usGraph.addEdgeArr("NM", ["AZ", "CO"]);
	    usGraph.addEdgeArr("ID", ["OR", "UT", "AZ"]);
	    usGraph.addEdgeArr("UT", ["ID", "NV", "AZ"]);
	    usGraph.addEdgeArr("AZ", ["UT", "CA"]);
	    usGraph.addEdgeArr("NV", ["CA"]);
	    usGraph.addEdgeArr("OR", ["CA"]);
	    usGraph.addEdgeArr("WA", ["OR"]);
	    usGraph.addEdgeArr("KY", ["TN", "MO"]);
	    usGraph.addEdgeArr("NC", ["TN", "SC"]);
	    usGraph.addEdgeArr("SC", ["GA", "TN"]);
	    usGraph.addEdgeArr("GA", ["AL", "TN"]);
	    usGraph.addEdgeArr("AL", ["MS", "TN"]);
	    usGraph.addEdgeArr("TN", ["AL", "MS", "AR"]);
	    usGraph.addEdgeArr("MS", ["LA", "AR"]);
	},

	printPaths: function() {
		console.info(usGraph.getPaths("NY", "CA"));
	}
}

obj.generateMap();
usGraph.dfs("NY");

// obj.printPaths();








