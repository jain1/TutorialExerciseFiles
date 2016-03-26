var myStyles = ['#268BD2', '#BD3613']

d3.selectAll('.item')
    .data(myStyles)
    .style('background', function(d){
        return d
    })