const d3Chart = ()=> {
var data = [
    { step: 'Step 1', percentage: 20 },
    { step: 'Step 2', percentage: 40 },
    { step: 'Step 3', percentage: 60 },
    { step: 'Step 4', percentage: 80 },
    { step: 'Step 5', percentage: 100 },
];

// Set up the SVG canvas
var svg = d3.select('main').append('svg')
    .attr('width', 500)
    .attr('height', 300);

// Create scales and axes
var xScale = d3.scaleBand()
    .domain(data.map(d => d.step))
    .range([0, 400])
    .padding(0.1);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.percentage)])
    .range([250, 0]);

// Draw the bars
svg.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.step))
    .attr('y', d => yScale(d.percentage))
    .attr('width', xScale.bandwidth())
    .attr('height', d => 250 - yScale(d.percentage));

// Add labels and titles
svg.selectAll('.label')
    .data(data)
    .enter().append('text')
    .attr('class', 'label')
    .attr('x', d => xScale(d.step) + xScale.bandwidth() / 2)
    .attr('y', d => yScale(d.percentage) - 10)
    .text(d => d.percentage + '%');

svg.append('text')
    .attr('x', 200)
    .attr('y', 30)
    .attr('text-anchor', 'middle')
    .text('Cognitive App Development Steps');

    var newd3 = d3Chart(document.getElementById('newd3'))
    newd3
}

