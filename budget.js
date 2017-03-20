var first = d3.select("#one");
var second = d3.select("#two");

//[revenue, spending, surplus, GDP]
var data14 = [2.79,3.23,.447,15.8];
var data15 = [2.96,3.36,.399,16.2];


var makeBars = function() {

    first.selectAll("div")
	.data(data14)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*90 + 40 + "px";
	})
	.text( function(d) {
	    return d;
	});

    
    second.selectAll("div")
	.data(data15)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*90 + 40 + "px"; 
	})
	.text( function(d) {
	    return d;
	});
};

makeBars();
