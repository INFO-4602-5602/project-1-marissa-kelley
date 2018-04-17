Project 1 Re-do: Anscombe's Quartet</h1>

I worked alone on this project. 

The sources I used include:
https://www.youtube.com/watch?v=X2_apg4CIRA
^ This was to figure out how to upload the data, which I still wasn't able to successfully achieve

https://bl.ocks.org/d3noob
^ This one gave me an idea of how to run D3 along with the shakespeare_top100 practice data from in class

https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0
^ This one showed me a simple line graph 

https://bl.ocks.org/mbostock/3883245
^ This one was another line chart example

http://bl.ocks.org/weiglemc/6185069
^ This one provided me with an example of a scatterplot

http://bl.ocks.org/bunkat/2595950
^ This one was a simple scatter chart 

http://bl.ocks.org/benjchristensen/2657838
^ This one helped with interactivity in line graphs 

https://stackoverflow.com/questions/12266967/d3-js-how-to-add-labels-to-scatter-points-on-graph
^ Used to add labels 

http://bl.ocks.org/d3noob/5987480
^ Figuring out problem 5 and adding multiple graphs onto one page

Project 1 Resubmission

A lot of the changes made for parts 1 and 2 involved a lot of reorganizing where I put my data in order to make it logically make sense. Along with that, one of the larger mistakes I made was not loading the data correctly. I re-pulled my project down from github and was able to reconfigure a lot of what I had previously worked on. 

For Part 1, I had the csv ready to run, but wasn’t able to test the data uploading correctly. This was changed by getting rid of the html header and adjusting the body of the section. For this section, I used parts of a YouTube video to look at what the code needed to look like. Along with that, I put all of the constant defining parts of the graph (the width, height, etc.) into part one, rather than in the section where the data was supposed to load. Following that, I took out my code that showed called d3.csv to throw the error. I had it all in one big section, but found it more manageable and easy to follow when I split up all of the csv’s into their respective parts of the project. Instead, I was able to check the datasets and configure them to load properly (under the //code portion). 

For Part 2, I began by scaling the plot as we had in the sample class (Shakespeare_100 data) before setting the dimensions, margins, and ranges of the graph. By doing this, it ensured that the graph wouldn’t go off the page and would also set boundaries so you wouldn’t end up with a graph that was too small. Afterwards, I selected the data I wanted to append and attributed the correct width and height. This was done by matching the width to the left and right margins while the height was added to the top and bottom margins. After, I called the csv data and wrote the function (error, data) part that would throw any error that occurred within the data. Next, I made the data into numbers in order for them to be compared. I scaled the range of data again using the x.domain and y.domain functions before adding the scatterplot points. This code was all found from the sample Shakespeare data. I attempted to add on Pixar’s .easeBounce function (magic) to make the data more exciting to look at. Finally, I added the x and y axes along with some text labels. 

For Part 3, I scaled the visualization, using the same widths and heights as before along with the same dimensions, margins and ranges. After, I called the data and defined the line, using valueline. I then scaled the range of the data and sorted it so I could append the path and add the line to all of the points. Finally, I added the x and y axes with some text labels. I then added a mouseover again for Part 4 changing the color of the circles from black to pink. There wasn’t a specific reason to choose those colors other than my belief that they’d show up well. 

For Part 5, I set up the scale, range and margins for each graph and then added the graph canvas to the body of the website using the d3.select(“#scatterplotSet”).append(“svg) code. I repeated the same lines of code to add on all four graphs. 
