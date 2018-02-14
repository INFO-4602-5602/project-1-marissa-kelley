<html>
<head>
<title>Project 0</title>
<style type="text/css" href="project0.css"></style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!--Put your D3 import statement between these two lines-->
    <script src="https://d3js.org/d3.v5.min.js"></script>
<!--Put your D3 import statement between these two lines-->
   
</head>

<body>
	<div id="partOne">
        <h1>Part One: </h1>
	</div>
d3.csv("Anscombe_1.csv", function(error1, data1) {
checkDataSet(data1);
    d3.csv("Anscombe_2.csv", function(error2, data2) {
    checkDataSet(data2);
        d3.csv("Anscombe_3.csv", function(error3, data3) {
        checkDataSet(data3);
            d3.csv("Anscombe_4.csv", function(error4,data4) {
            checkDataSet(data4);
                if (error) throw error;
            });
        });
    });
});
var w = 700; // Width of our visualization
var h = 500; // Height of our visualization
var xOffset = 40; // Space for x-axis labels
var yOffset = 100; // Space for y-axis labels
var margin = 10; // Margin around visualization
var vals = ['Rank', 'Frequency', 'TFIDF', 'Document Frequency']; // List of data attributes
var xVal = vals[0]; // Value to plot on x-axis
var yVal = vals[1]; // Value to plot on y-axis

d3.csv("AnscombeII.csv", function (error, data) {
    if (error) throw error; 
    
// Scale the range of the data
    x.domain(d3.extent(data,function(d){return d[xVal];}));
    y.domain([0,d3.max(data, function(d){return d[yVal];})]); 
    
    <div id="partTwo">
        <h1>Part Two: </h1>
        <div id="barchart">
        </div>
	</div>
    
    <div id="partThree">
        <h1>Part Three &amp; Four: </h1>
        <div id="scatterplot">
            <p id="scatterLabel"></p>
        </div>
	</div>
    
    <div id="partFive">
        <h1>Part Five: </h1>
        <div id="scatterplotSet">
        </div>
	</div>
    
    <script type="text/javascript">
        // Put your part one code here ***********************
var anscombe1 = d3.csv('data/anscombe_I.csv',function(data){
return data; });
        
        // Leave this to test your data uploading. All data uploading should be above this line
        function checkDataset(dataset) {
            if (dataset.length == 11)
                $("#partOne").append("<p>data loaded correctly</p>");
            else
                $("#partOne").append("<p>data loaded incorrectly. Try using the debugger to help you find the bug!</p>");
        }
        
        // Put your part two code here ***********************
        d3.csv("shakespeare_top100.csv", function (error, data) {
    if (error) throw error; 
    //the function callback portion will pull the file it can read and then execute all of the code
    
     // Scale the range of the data
    x.domain(d3.extent(data,function(d){return d[xVal];}));
    y.domain([0,d3.max(data, function(d){return d[yVal];})]); 
    
  // Add the scatterplot points
    svg.selectAll("circle")
        .data(data)
        .enter() //"I've found these circles and bound them to data, I want to go in and do something with them"
        .append("circle"); //add a new circle for each circle in the dataset 
        .attr("r",3) 
        .attr("cx",function(d){return x(d[xVal]);})
        .attr("cx",function(d){return y(d[yVal]);})
        .attr("fill", "orange") //the fill changes the color
        .transition()
        .ease(d3.easeBounce)
        .duration(10000)
        .attr("r", function(d){return d["TFIDF"]});
    

  // Add the X Axis
    svg.append("g")
        .attr("transform","translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
  // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
        // Put your part three & four code here *********************** 
    .attr("r",3) 
        .attr("cx",function(d){return x(d[xVal]);})
        .attr("cx",function(d){return y(d[yVal]);})
        // Put your part five code here ***********************
        
    </script>
</body>


</html>


var svg = d3.select("#pointsSVG").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g") //allows the svg to be transformed with the code below 
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

div id =pointsSVG"

parseFloat(d[xVal])); //parse your float to a numerical datatype 
//make sure your number isn't coming out as a string 
d[xVal]=+d[xVal] //will convert to a numerical datatype 