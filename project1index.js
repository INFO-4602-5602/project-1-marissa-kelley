<head>
<title>Project 0</title>
<style type="text/css" href="project0.css"></style>
<link rel="stylesheet" type="text/css" href="project1.css">></link>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!--Put your D3 import statement between these two lines-->
  <script src="http://d3js.org/d3.v4.js" charset="utf-8"></script>
<!--Put your D3 import statement between these two lines-->
   
</head>

<body>
<div id="partOne">
        <h4>Part One: </h4>
        I've made a change!
	</div>

    <div id="partTwo">
        <h4>Part Two &amp; Four: </h4>
        <div id="scatterplot">
        </div>
	</div>

    <div id="partThree">
        <h4>Part Three: </h4>

	</div>

    <div id="partFive">
        <h4>Part Five: </h4>
        <div id="scatterplotSet">
        </div>
	</div>

<script type="text/javascript">       
        // Put your part one code here ***********************
        // First, we will create some constants to define non-data-related parts of the graph
        var w = 700; //Width of our visualization
        var h = 500; //Height of our visualization
        var xOffset = 40; //Space for x-axis labels
        var yOffset = 100; //Space for y-axis labels
        var margin = 10; // Margin around visualization
        var vals = ['x','y']; // List of data attributes
        var xVal = vals[0]; //Value to plot on the x-axis
        var yVal = vals[1]; // Value to plot on the y-axis

        // Code
    d3.csv("data/anscombe_I.csv", function(data){
        checkDataset(data);
        data.forEach(function(d){
            d.x = +d.x;
            d.y = +d.y;
        });
    });
    d3.csv("data/anscombe_II.csv", function(data2){
        checkDataset(data2);
        data.forEach(function(d02){
            d02.x = +d02.x;
            d02.x = +d02.y;
        }):
    }):
    d3.csv("data/anscombe_III.csv", function(data3){
        checkDataset(data3);
        data.forEach(function(d03){
            d03.x = +d03.x;
            d03.x = +d03.y;
        }):
    }):
    d3.csv("data/anscombe_IV.csv", function(data4){
        checkDataset(data2);
        data.forEach(function(d04){
            d04.x = +d04.x;
            d04.x = +d04.y;
        }):
    }):
    
    // Leave this to test your data uploading. All data uploading should be above this line
    function checkDataset(dataset) {
        if (dataset.length == 11)
            $("#partOne").append("<p>data loaded correctly</p>");
        else 
            $("#partOne").append("<p>data loaded incorrectly. Try using the debugger to help you find the bug!</p>");
    }
    
        // Put your part two code here ***********************
       //Scale the plot 
        var w = 700; //Width of our visualization
        var h = 500; //Height of our visualization
        var xOffset = 40; //Space for x-axis labels
        var yOffset = 100; //Space for y-axis labels
        var margin = 10; // Margin around visualization
        var vals = ['x','y']; // List of data attributes
        var xVal = vals[0]; //Value to plot on the x-axis
        var yVal = vals[1]; // Value to plot on the y-axis
    
    // set the dimensions and margins of the graph
    var margins = { top:20, right:20, bottom:30, left:50};
    var width = w - margins.left - margins.right;
    var height = h - margins.top - margins.bottom;
    
    // set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var x_label = 0;
    var y_label = 0;
    
    // 
    var svg = d3.select("#partTwo").append("svg")
                .attr("width", width + margins.left + margins.right)
                .attr("height", height + margins.top + margins.bottom)
                .append("g")
                .attr("transform", "translate(" + margins.left + "," + margins.top +)");
                      
    d3.csv("data/anscombe_II.csv", function(error, data){
        if (error) throw error;
        
        // Make the data numbers so they can be compared
        data.forEach(function(d){ d[xVal] = parseFloat(d[xVal]); });
        data.forEach(function(d){ d[yVal] = parseFloat(d[yVal]); });})
    
     // Scale the range of the data
    x.domain([d3.max(data,function(d){return d[xVal];}) - 1, d3.max(data, function(d) {return d[xVal]; }) + 4]);
    y.domain([0, d3.max(data, function(d) {return d[yVal]; })]); 
    
  // Add the scatterplot points
    svg.selectAll("circle")
        .data(data)
        .enter() //"I've found these circles and bound them to data, I want to go in and do something with them"
        .append("circle"); //add a new circle for each circle in the dataset 
        .attr("class",3)
        .attr("x", function(d) {return d[xVal];})
        .attr("y", function(d) {return d[yVal];})
        .attr("cx",function(d){return x(d[xVal]);})
        .attr("cy",function(d){return y(d[yVal]);})
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .attr("fill", "orange") //the fill changes the color
        .transition()
        .ease(d3.easeBounce) //Pixar magic 
        .duration(10000)

  // Add the X Axis
    svg.append("g")
        .attr("transform","translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
  // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
    
  // Add text labels
    var xLabel = svg.append("text")
                    .attr("class","label")
                    .text(xVal)
                    .attr("x", width - 20)
                    .attr("y", height - 10); 
    var yLabel = svg.append("text")
                    .attr("class", "label")
                    .text(yVal)
                    .attr("y" - 10)
                    .attr("transform", "rotate(90)")
                    .style("text-anchor", "start");
    }); 
    
    //the function callback portion will pull the file it can read and then execute all of the code
        // Put your part three & four code here *********************** 
        // Part 3
    
    //scale the visualization
     var w = 700; // Width of our visualization
        var h = 500; // Height of our visualization
        var xOffset = 40; // x-axis labels
        var yOffset = 100; // y-axis labels
        var margin = 10; // Margin around vis
        var vals = ['x', 'y']; // List of data attributes
        var xVal = vals[0]; // Value to plot on the x-axis
        var yVal = vals[1]; // Value to plot on the y-axis
    
        // set the dimensions and margins of the graph
        var margins = { top:20, right:20, bottom:30, left:50};
        var width = w - margins.left - margins.right;
        var height = h - margins.top - margins.bottom;
    
        // set the ranges
        var x = d3.scaleLinear().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);
        var chart2 = d3.select("#partThree").append("svg")
                    .attr("width", width + margins.left + margins.right)
                    .attr("height", height + margins.top + margins.bottom)
                .append("g")
                    .attr("transform", "translate(" + margins.left + "," + margins.top + ")");
        
    // Get the tooltip
        var tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
    
        //Get the data
        d3.csv("data/anscombe_II.csv", function(error, data2){
          if (error) throw error;
            
          data.forEach(function(d){ d[xVal] = parseFloat(d[xVal]); });
          data.forEach(function(d){ d[yVal] = parseFloat(d[yVal]); });
            
        // convert string into a number
          data.forEach(function(d) {
            d.x = +d.x;
            d.y = +d.y;
            data.sort(function(a, b) {
  return a.x - b.x;
        
        // define the line
        var valueline = d3.line()
            .x(function(d) { return x(d.x); })
            .y(function(d) { return y(d.y); });
            
        // Scale the range of the data
        x.domain([d3.max(data, function(d) { return d[xVal]; }) -1, d3.max(data, function(d) { return d[xVal]; }) + 1]);
        y.domain([0, d3.max(data, function(d) { return d[yVal]; })]);
        
             // Scale the range of the data
          x.domain([0, d3.max(data, function(d) { return d.x; })]);
          y.domain([0, d3.max(data, function(d) { return d.y; })]);
            
        // Sort the data
        data.sort(function(x, y) {return d3.ascending(x[xVal], y[xVal]);});
        var line = d3.line()
                     .x(function(d) {return x(d[xVal]);})
                     .y(function(d) {return y(d[yVal]);});
            

           //append the path and add the line
           svg1.append("path")
               .data([data])
               .attr("class", "line")
               .attr('stroke-width', 3)
               .attr("stroke","green")
               .attr("fill", "none")
               .attr("d", vLine);
          
            //Add the x-axis
          svg1.append("g")
             .attr("transform", "translate(0, " + height + ")")
             .attr("fill","green")
             .call(d3.axisBottom(x));
          
            //Add the y-xis
          svg1.append("g")
             .attr("fill", "green")
             .call(d3.axisLeft(y));
          
            // Add text labels
          var xLabel = svg1.append("text")
                          .attr("class", "label")
                          .text(xVal)
                          .attr("x", width - 20)
                          .attr("y", height - 10);
          var yLabel = svg1.append("text")
                          .attr("class", "label")
                          .text(yVal)
                          .attr("y", -10)
                          .attr("transform", "rotate(90)")
                          .style("text-anchor", "start");
                
        //Part 4- Interactivity
        // draw dots and add mouseover again 
          svg4.selectAll("circle")
              .data(data)
            .enter().append("circle")
              .attr("class",3)
              .attr("x", function(d) {return d[xVal];})
              .attr("y", function(d) {return d[yVal];})
              .attr("cx",function(d){return x(d[xVal]);})
              .attr("cy",function(d){return y(d[yVal]);})
              .attr("fill","black")
              .on("mouseover", handleMouseOver)
              .on("mouseout", handleMouseOut)
              .attr("fill", "pink")
              .transition()
              });
          });
        });

        // Put your part five code here ***********************
        
        //adding dataset 1
        d3.csv("data/anscombe_I.csv",function(data){
               data.forEach(function(d){
                 d.x=parseFloat(d.x);
                 d.y=parseFloat(d.y);
               });
           var margin={top:20, bottom:20,left:50,right:20};
           var width = 300 - margin.left - margin.right;
           var height= 300- margin.top - margin.bottom;
           var x5 = d3.scaleLinear().range([0,width]);
           var y5 = d3.scaleLinear().range([height,0]);
           x5.domain([0,1 + d3.max(data,function(d)  {return d.x;})]);
           y5.domain([0,1 + d3.max(data,function(d) {return d.y})]);
            var svg3 = d3.select("#partFive").append("svg")
                    .attr("width", width1 + margins.left + margins.right)
                    .attr("height", height1 + margins.top + margins.bottom)
                    .append("g")        //The svg gets transformed
                    .attr("transform", "translate(" + margins.left + "," + margins.top + ")");
             svg.selectAll("circle")
                   .data(data)
                   .enter()
                   .append("circle")
                   .attr("r",5)
                   .attr("fill","purple")
                   .attr("stroke","black")
                   .attr("stroke-width",1)
                   .attr("cx", function(d){return x5(d.x);})
                   .attr("cy",function(d){return y5(d.y);})
                   //x-axis
               svg.append("g")
                 .attr("transform","translate(0,"+height+")")
                 .call(d3.axisBottom(x5))
                 .attr("stroke-width",2);
                  //y-axis
               svg.append("g")
                 .call(d3.axisLeft(y5))
                 .attr("stroke-width",2);
                 //title
                 svg.append("text")
                    .attr("x",(width /2))
                    .attr("y",0 - (margin-top /2))
                    .attr("text-anchor","middle")
                    .style("font-size","15px")
                    .text("Anscombe I");
         });
         //adding dataset 2
         d3.csv("data/anscombe_II.csv",function(data){
             data.forEach(function(d){
               d.x=parseFloat(d.x);
               d.y=parseFloat(d.y);
             });
             var margin={top:20, bottom:20,left:50,right:20};
             var width = 300 - margin.left - margin.right;
             var height= 300- margin.top - margin.bottom;
             var x5 = d3.scaleLinear().range([0,width]);
             var y5 = d3.scaleLinear().range([height,0]);
         x5.domain([0,1 + d3.max(data,function(d)  {return d.x;})]);
         y5.domain([0,1 + d3.max(data,function(d) {return d.y})]);
          var svg3 = d3.select("#partFive").append("svg")
                    .attr("width", width1 + margins.left + margins.right)
                    .attr("height", height1 + margins.top + margins.bottom)
                    .append("g")   
                    .attr("transform", "translate(" + margins.left + "," + margins.top + ")");
         svg.selectAll("circle")
               .data(data)
               .enter()
               .append("circle")
               .attr("r",5)
               .attr("fill","purple")
               .attr("stroke","black")
               .attr("stroke-width",2)
               .attr("cx", function(d){return x5(d.x);})
               .attr("cy",function(d){return y5(d.y);})
              
             // add the x-axis
             svg.append("g")
               .attr("transform","translate(0,"+height+")")
               .call(d3.axisBottom(x5))
               .attr("stroke-width",2);
              
             //add the y-axis
             svg.append("g")
               .call(d3.axisLeft(y5))
               .attr("stroke-width",1);
               //title
               svg.append("text")
                  .attr("x",(width /2))
                  .attr("y",0 - (margin-top /2))
                  .attr("text-anchor","middle")
                  .style("font-size","12px")
                  .text("Anscombe II");
       });
       //dataset 3
       d3.csv("data/anscombe_III.csv",function(data){
           data.forEach(function(d){
             d.x=parseFloat(d.x);
             d.y=parseFloat(d.y);
           });
           var margin={top:20, bottom:20,left:50,right:20};
           var width = 300 - margin.left - margin.right;
           var height= 300- margin.top - margin.bottom;
           var x5 = d3.scaleLinear().range([0,width]);
           var y5 = d3.scaleLinear().range([height,0]);
       x5.domain([0,1 + d3.max(data,function(d)  {return d.x;})]);
       y5.domain([0,1 + d3.max(data,function(d) {return d.y})]);
         var svg3 = d3.select("#partFive").append("svg")
                    .attr("width", width1 + margins.left + margins.right)
                    .attr("height", height1 + margins.top + margins.bottom)
                    .append("g")        //allows the svg to be transformed w the code below
                    .attr("transform", "translate(" + margins.left + "," + margins.top + ")");
       svg.selectAll("circle")
             .data(data)
             .enter()
             .append("circle")
             .attr("r",5)
             .attr("fill","purple")
             .attr("stroke","black")
             .attr("stroke-width",1)
             .attr("cx", function(d){return x5(d.x);})
             .attr("cy",function(d){return y5(d.y);})
             //x-axis
           svg.append("g")
             .attr("transform","translate(0,"+height+")")
             .call(d3.axisBottom(x5))
             .attr("stroke-width",2);
             //y-axis
           svg.append("g")
             .call(d3.axisLeft(y5))
             .attr("stroke-width",2);
             //title
             svg.append("text")
                .attr("x",(width /2))
                .attr("y",0 - (margin-top /2))
                .attr("text-anchor","middle")
                .style("font-size","15px")
                .text("Anscombe II");
     });
    //-----dataset IV ------
     d3.csv("data/anscombe_IV.csv",function(data){
         data.forEach(function(d){
           d.x=parseFloat(d.x);
           d.y=parseFloat(d.y);
         });
     var margin={top:20, bottom:20,left:50,right:20};
     var width = 300 - margin.left - margin.right;
     var height= 300- margin.top - margin.bottom;
     var x5 = d3.scaleLinear().range([0,width]);
     var y5 = d3.scaleLinear().range([height,0]);
     x5.domain([0,1 + d3.max(data,function(d)  {return d.x;})]);
     y5.domain([0,1 + d3.max(data,function(d) {return d.y})]);
     var svg3 = d3.select("#partFive").append("svg")
                    .attr("width", width1 + margins.left + margins.right)
                    .attr("height", height1 + margins.top + margins.bottom)
                    .append("g")        //allows the svg to be transformed w the code below
                    .attr("transform", "translate(" + margins.left + "," + margins.top + ")");
       svg.selectAll("circle")
             .data(data)
             .enter()
             .append("circle")
             .attr("r",5)
             .attr("fill","purple")
             .attr("stroke","black")
             .attr("stroke-width",1)
             .attr("cx", function(d){return x5(d.x);})
             .attr("cy",function(d){return y5(d.y);})
         svg.append("g")
           .attr("transform","translate(0,"+height+")")
           .call(d3.axisBottom(x5))
           .attr("stroke-width",2);
         svg.append("g")
           .call(d3.axisLeft(y5))
           .attr("stroke-width",2);
           svg.append("text")
              .attr("x",(width /2))
              .attr("y",0 - (margin-top /2))
              .attr("text-anchor","middle")
              .style("font-size","15px")
              .text("Anscombe IV");
   });
    
    </script>
</body>

//Some chicken scratch that wasn't needed here, but I didn't want to delete (for future purposes) 
var svg = d3.select("#pointsSVG").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g") //allows the svg to be transformed with the code below 
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

div id =pointsSVG"

parseFloat(d[xVal])); //parse your float to a numerical datatype 
//make sure your number isn't coming out as a string 
d[xVal]=+d[xVal] //will convert to a numerical datatype 