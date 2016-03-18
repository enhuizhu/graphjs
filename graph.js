var _ = require("underscore");

var graph = function() {	
}

graph.prototype.adjacency = {};

graph.prototype.marked = {};

graph.prototype.addEdge = function(v0, v1, direction) {
    if (!this.adjacency[v0]) {
    	this.adjacency[v0] = [];
    };

    if (!this.adjacency[v1] && direction) {
    	this.adjacency[v1] = [];
    };
    
    if (this.adjacency[v0].indexOf(v1) == -1) {
	    this.adjacency[v0].push(v1);
    };
        
    if (direction && this.adjacency[v1].indexOf(v0) == -1) {
	    this.adjacency[v1].push(v0);
    };
}

graph.prototype.addEdgeArr = function(v0, arr) {
	var that = this;
	
	if (!this.adjacency) {};

	arr.map(function(v) {
		that.addEdge(v0, v);
	});
}

graph.prototype.dfs = function(v, marked) {
	var that = this;
	
	if (!marked) {
		marked = {};
	};

	marked[v] = true;
	
	if (this.adjacency[v] != undefined) {
		console.info("visited vertices:", v);
	}else{
		return false;
	}

	this.adjacency[v].forEach(function(d) {
		if (!marked[d]) {
			marked[d] = true;
			that.dfs(d, marked);
		};
	});
}

graph.prototype.getPaths = function(v0, v1, paths, currentPath) {
	var that = this;
	
	if (!paths) {
		paths = [];
	};
	
	if (!currentPath) {
		currentPath = [];
	};
    
	var newPath = _.clone(currentPath);
	
	if (newPath.length > 20) {
		return ;
	};

	newPath.push(v0);

	if (this.adjacency[v0] === undefined) {
		return ;
	};

	this.adjacency[v0].forEach(function(d) {
		if (d === v1) {
			newPath.push(v1);
			paths.push(newPath);
		}else{
			that.getPaths(d, v1, paths, newPath);
		}
	});

	return paths;
}

module.exports = graph;