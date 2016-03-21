"use strict";
var graph = require("./graph");
var usGraph = new graph();
var _ = require("underscore");

var obj = {
	taxMap: {},

	originalCost: 0.5,

	solutions: [],
	
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

	generateTaxMap: function() {
		//should check if the adjancy
		if (_.isEmpty(usGraph.adjacency)) {
			throw new Error("adjacency is empty");
		};

		var that = this;
		
		_.each(usGraph.adjacency, function(v, k) {
			that.setTax(k);
			
			v.map(function(key) {
				that.setTax(key);
			});
		});
	},

	setTax: function(key) {
		if (!this.taxMap[key]) {
			this.taxMap[key] = this.generateRandomTaxRate() / 100;
		};
	},

	generateRandomTaxRate: function() {
		return Math.round(Math.random() * 3) + 3;
	},

	printPaths: function() {
		var paths = usGraph.getPaths("NY", "CA"),
			that = this;
		
		paths.map(function(v) {
			var sum = _.reduce(v, function(memo, num) {
				return memo + that.taxMap[num];
			}, 0);
			
			var cost = (that.originalCost * (1 + sum)).toFixed(2);
			
			that.solutions.push({
				path: v,
				cost: cost
			})	
		});
	},

	printTaxMap: function() {
		console.info(JSON.stringify(this.taxMap));
	},


}

obj.generateMap();
obj.generateTaxMap();
obj.printPaths();
console.info("\n");
console.info("--- state tax --");
console.info(JSON.stringify(obj.taxMap));
console.info("\n");
console.info("--- best solution --");
var solution = _.min(obj.solutions, function(v, k) {
	return v.cost;
});
console.info(solution);
console.info("\n");
console.info("--- same cost solutions --- ");

obj.solutions.filter(function(v, k) {
	return v.cost === solution.cost;
}).map(function(v, k) {
	console.info(v);
});
