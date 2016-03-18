var graph = function() {	
}

graph.prototype.adjacency = {};

graph.prototype.marked = {};

graph.prototype.addEdge = function(v0, v1) {
    if (!this.adjacency[v0]) {
    	this.adjacency[v0] = [];
    };

    if (!this.adjacency[v1]) {
    	this.adjacency[v1] = [];
    };

    this.adjacency[v0].push(v1);
    this.adjacency[v1].push(v0);
}

graph.prototype.dfs = function(v, marked) {
	var that = this;
	
	if (!marked) {
		marked = {};
	};

	marked[v] = true;
	
	if (this.adjacency[v] != undefined) {
		console.info("visited vertices:", v);
	};

	this.adjacency[v].forEach(function(d) {
		if (!marked[d]) {
			marked[d] = true;
			that.dfs(d, marked);
		};
	});
}

graph.prototype.getPaths = function(v0, v1, paths, currentPath) {
	if (!paths) {
		paths = [];
	};
	
	if (!currentPath) {
		currentPath = [];
	};
    
	currentPath.push(v0);

	if (this.adjacency[v0] === undefined) {
		return [];
	};

	this.adjacency[v0].forEach(function(d) {
		if (d === v1) {
			currentPath.push[v1];
			paths.push[currentPath];
		}else{
			currentPath.concat(that.getPaths(d, v1, paths, currentPath))
		}
	});

	return paths;
}

module.exports = graph;