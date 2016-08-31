
///// data base ****************************

	 
	 
	 d3.csv("Drug.csv", function(error, data) {

	 
	 var skillsdata = null ;
  
  data.forEach(function(d) {
  
  });

  // compute the new data 
  var newData =[]
  var size = 0;

	data.forEach(function(d) {
	
	var date = d.Date.split("/") ;
	var year = date[2] ;
	var gender = d.Sex ;
	var age = d.Age ;
	var race = d.Race ;
	

		
		var sex = "2";

		 var newOp = { Race:race , Age:age , Year:year, Sex:gender , People:1 };
			newData.push(newOp) ;
		 size = size + 1 ;

	
	});
  
  // Compute the extent of the data set in age and years.
  var age1 = d3.max(newData, function(d) { return d.Age; }),
	  age0 = d3.min(newData, function(d) { return d.Age; }),
      year0 = d3.min(newData, function(d) { return d.Year; }),
      year1 = d3.max(newData, function(d) { return d.Year; }),
      year = year1;
	 
	 
  // repair the opjects to fill them
		var black = {"0-10":[] , "10-20":[] , "20-30":[] ,  "30-40":[] , "40-50":[] , "50-60":[] , "60-70":[] , "70-80":[] , "80-90":[] } ;
		var white = {"0-10":[] , "10-20":[] , "20-30":[] ,  "30-40":[] , "40-50":[] , "50-60":[] , "60-70":[] , "70-80":[] , "80-90":[] } ;
		var other = {"0-10":[] , "10-20":[] , "20-30":[] ,  "30-40":[] , "40-50":[] , "50-60":[] , "60-70":[] , "70-80":[] , "80-90":[] } ;

	
  // fill in the black opjects
  var count = 0 ;
	race = "Black";
	for (i = 0; i < 9; i++) { 
		var year1 = 0;
		var year2 = 0;
		var year3 = 0;
		var year4 = 0;

	var from_age = 10 * i ;
	var to_age = from_age + 10 ;
		newData.forEach(function(d) {
			if(   d.Age < to_age && d.Age >= from_age &&  d.Race == race  ){
				if( d.Year == "2012"){
					year1 = year1 + 1 ;
					count = count + 1 ; 
				}
				if( d.Year == "2013"){
					year2 = year2 + 1 ;
					count = count + 1 ; 
				}
				if( d.Year == "2014"){
					year3 = year3 + 1 ;
					count = count + 1 ; 
				}
				if( d.Year == "2015"){
					year4 = year4 + 1 ;
					count = count + 1 ; 
				}
				
				
			}
			});
			var index ="0-10"  ;
			if (i == 0){
				index = "0-10"; 
			}if (i == 1){
				index = "10-20"; 
			}if (i == 2){
				index = "20-30"; 
			}if (i == 3){
				index = "30-40"; 
			}if (i == 4){
				index = "40-50"; 
			}if (i == 5){
				index = "50-60"; 
			}if (i == 6){
				index = "60-70"; 
			}if (i == 7){
				index = "70-80"; 
			}if (i == 8){
				index = "80-90"; 
			}
			if( year1 == 0 && year2 == 0 && year3 == 0 && year4 == 0  ){
				delete (black)[index];
			}
			else{
				(black)[index].push(year1);
				(black)[index].push(year2);
				(black)[index].push(year3);
				(black)[index].push(year4);
				(black)[index].push(year4);
				(black)[index].push(year1 + year2 + year3 + year4);				

				
			}


	}
	 
	
	// fill in the black opjects
	count = 0 ; 
		race = "White";
	for (i = 0; i < 9; i++) { 
		var year1 = 0;
		var year2 = 0;
		var year3 = 0;
		var year4 = 0;

	var from_age = 10 * i ;
	var to_age = from_age + 10 ;
		newData.forEach(function(d) {
			if(   d.Age < to_age && d.Age >= from_age &&  d.Race == race  ){
				if( d.Year == "2012"){
					year1 = year1 + 1 ;
					count = count + 1 ; 
				}
				if( d.Year == "2013"){
					year2 = year2 + 1 ;
					count = count + 1 ; 
				}
				if( d.Year == "2014"){
					year3 = year3 + 1 ;
					count = count + 1 ; 
				}
				if( d.Year == "2015"){
					year4 = year4 + 1 ;
					count = count + 1 ; 
				}
				
			}
			});
			var index ="0-10"  ;
			if (i == 0){
				index = "0-10"; 
			}if (i == 1){
				index = "10-20"; 
			}if (i == 2){
				index = "20-30"; 
			}if (i == 3){
				index = "30-40"; 
			}if (i == 4){
				index = "40-50"; 
			}if (i == 5){
				index = "50-60"; 
			}if (i == 6){
				index = "60-70"; 
			}if (i == 7){
				index = "70-80"; 
			}if (i == 8){
				index = "80-90"; 
			}
			if( year1 == 0 && year2 == 0 && year3 == 0 && year4 == 0   ){
				delete (white)[index];
			}
			else{
				(white)[index].push(year1);
				(white)[index].push(year2);
				(white)[index].push(year3);
				(white)[index].push(year4);
				(white)[index].push(year4);
				(white)[index].push(year1 + year2 + year3 + year4);				
			}

	}

	// other race
	count = 0 ;
	for (i = 0; i < 9; i++) { 
		var year1 = 0;
		var year2 = 0;
		var year3 = 0;
		var year4 = 0;

	var from_age = 10 * i ;
	var to_age = from_age + 10 ;
		newData.forEach(function(d) {
			if(   d.Age < to_age && d.Age >= from_age &&  d.Race != "White"   &&  d.Race != "Black" ){
				if( d.Year == "2012"){
					year1 = year1 + 1 ;
					count = count + 1 ;
				}
				if( d.Year == "2013"){
					year2 = year2 + 1 ;
					count = count + 1 ;
				}
				if( d.Year == "2014"){
					year3 = year3 + 1 ;
					count = count + 1 ;
				}
				if( d.Year == "2015"){
					year4 = year4 + 1 ;
					count = count + 1 ;
				}
				
			}
			});
			var index ="0-10"  ;
			if (i == 0){
				index = "0-10"; 
			}if (i == 1){
				index = "10-20"; 
			}if (i == 2){
				index = "20-30"; 
			}if (i == 3){
				index = "30-40"; 
			}if (i == 4){
				index = "40-50"; 
			}if (i == 5){
				index = "50-60"; 
			}if (i == 6){
				index = "60-70"; 
			}if (i == 7){
				index = "70-80"; 
			}if (i == 8){
				index = "80-90"; 
			}
			if( year1 == 0 && year2 == 0 && year3 == 0 && year4 == 0   ){
				delete (white)[index];
			}
			else{
				(other)[index].push(year1);
				(other)[index].push(year2);
				(other)[index].push(year3);
				(other)[index].push(year4);
				(other)[index].push(year4);
				(other)[index].push(year1 + year2 + year3 + year4);				

			}

	}

	 newData =  {"Skills": {black,white,other}};


		
			
		 skillsdata = newData;

	

		console.log(newData);




//*****************************

var gg;
function initchart() {
    var data = {
        _proficiency: [ 0, 0, 0 ,0 ],
        children: null,
        value: 0,
        key: "",
        depth: 1
    };
    chart.refreshChart(data)

}
function mouseover(data) {
    chart.refreshChart(data);	
    var c = getcrumbpath(data);
	if( c.length == 1){
		initchart();
	}
	ii(c);
    d3
        .selectAll(".skills-sunburst path")
        .style("opacity", .3), sunburst
        .selectAll("path")
        .filter(function (a) { return c.indexOf(a) >= 0 })
	.style("opacity", 1)

}
function mouseleave() {
    d3
        .selectAll("path")
        .on("mouseover", null);
    d3
        .selectAll("path")
        .transition()
        .duration(1e3)
        .style("opacity", 1)
        .each("end", function () { d3.select(this).on("mouseover", mouseover) })
		
	}
function getcrumbpath(a) {
    for (var temp = [], c = a; c.parent;) temp.unshift(c), c = c.parent;
    return temp
}
function initbreadcrumb() {
    d3
        .select("#skills-chart-breadcrumb")
        .append("svg:svg")
        .attr("width", 500)
        .attr("height", 50)
        .attr("class", "trail")
}
function h(a, d3) {
    var c = [];
    c.push("0,0");
    c.push(r.w + ",0");
    c.push(r.w + r.t + "," + r.h / 2);
    c.push(r.w + "," + r.h);
    c.push("0," + r.h);
    d3 > 0 && c.push(r.t + "," + r.h / 2);
    return c.join(" ");
}
function ii(a) { /// i(a)
    a[a.length - 1]._color, a.length;
    var c = d3
        .select("#skills-chart-breadcrumb .trail")
        .selectAll("g")
        .remove();
    c = d3
        .select("#skills-chart-breadcrumb .trail")
        .selectAll("g")
        .data(a, function (a) { return a.key + a.depth });
    var d = c.enter().append("svg:g");
    d
        .append("svg:polygon")
        .attr("points", h)
        .style("fill", function (a) { return a._color }), 
    d
        .append("svg:text")
        .attr("x", r.w / 2 + 2)
        .attr("y", r.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("class", "breadcumb-text")
        .style("fill", function (a) { return getcolor(d3.rgb(a._color)) < 150 ? "#fff" : "#000" })
        .text(function (a) { return a.key }),
    c
        .attr("transform", function (a, b) { return "translate(" + b * (r.w + r.s) + ", 0)" }), 
    c.exit().remove(), 
    d3.select(".trail").style("visibility", "")
}
function getcolor(color) {
    return .299 * color.r + .587 * color.g + .114 * color.b
}
function k(a) {
    var c = ["#4CC3D9", "#FFC65D", "#7BC8A4", "#93648D", "#404040"], // change the colors of the sun 
        d = [-.1, -.05, 0];
    if (1 == a.depth) {
        var e = c[coloralternative % 5];
        return coloralternative++, e
    }
    if (a.depth > 1) {
        var f = d[a.value % 3];
        return d3.rgb(a.parent._color).brighter(.2 * a.depth + f * a.depth)
    }
}



var l;
var chart = function (d3) {
    function processdata(data) {
        var b = [],
            c = 0;
        return data._proficiency.forEach(function (a) {
            c <= i.length && (b.push({
                p: a,
                date: i[c]
            }), c++)
        }), b
    }
    function c(b, c) {
        j.domain(d3.extent(b, function (a) { return a.date }));
        k
            .domain([0, 160]), cpath // the domain of the deth pepole
            .append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + h + ")")
            .call(bottomtick)
            .append("text")
            .attr("x", 450)
            .attr("y", -8)
            .style("text-anchor", "end")
            .text("Time"), cpath
            .append("g")
            .attr("class", "y-axis axis")
            .call(lefttick)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".91em")
            .style("text-anchor", "end")
            .text("Deth numper"), cpath
            .append("path")
            .datum(b)
            .attr("class", "line")
            .attr("id", "skills-chart-line")
            .attr("d", n)
            .attr("stroke", function () { return c._color })
    }
    function refreshChart(data) {
         var e = processdata(data),
            f = d3.select("#skills-chart-line");
        null === f[0][0] 
        ? c(e, data) 
        : f
            .datum(e)
            .attr("d", n)
            .attr("stroke", function () { return data._color }) 
    }
    var chart = {},
        rect = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50
        },
        g = 530 - rect.left - rect.right,
        h = 400 - rect.top - rect.bottom,
        i = [  2012, 2013, 2014, 2015  ,2016,2017  ], 
        j = d3.scale.linear().range([0, g]),
        k = d3.scale.linear().range([h, 0]),
        bottomtick = d3
            .svg
            .axis()
            .scale(j)
            .tickValues([ 2012, 2013, 2014, 2015 , 2016,2017  ]) 
            .tickFormat(d3.format(".0f"))
            .tickPadding(10)
            .tickSize(0)
            .orient("bottom"),
        lefttick = d3
            .svg
            .axis()
            .scale(k)
            .tickSize(0)
            .tickPadding(10)
            .tickValues([10, 20, 30, 40 , 50 ,60 ,70 , 80 ,90 ,100 ,110, 120, 130, 140 , 150 ,160 ])  // fadi change ([20, 40, 60, 80, 100])
            .orient("left"),
        n = d3.svg.line().interpolate("basis").x(function (a) {
            return j(a.date)
        }).y(function (a) {
            return k(a.p)
        }),
        cpath = d3
            .select(".skills-chart")
            .append("svg")
            .attr("width", g + rect.left + rect.right)
            .attr("height", h + rect.top + rect.bottom)
            .append("g")
            .attr("transform", "translate(" + rect.left + "," + rect.top + ")");
        chart.refreshChart = refreshChart;
        return chart;
    }(d3),
    width = 780, // the width and the height of the sun prust
    height = 780,
    rad = Math.min(width, height) / Math.PI - 25,
    q = k,
    r = {
        w: 116,
        h: 30,
        s: 3,
        t: 7
    },
    sunburst = d3
        .select(".skills-sunburst")
        .append("svg:svg")
        .attr("width", width)
        .attr("height", height)
        .append("svg:g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
sunburst.append("svg:circle").attr("r", rad).style("opacity", 0);
var t = function (a, b) {
        var c = [],
            d = a.length;
        if (a.length !== b.length) c = a.length > b.length ? a : b;
        else for (var e = 0; d > e; e++) {
            var f = Math.max(a[e], b[e]) - Math.abs(a[e] - b[e]) / 8;
            c.push(f)
        }
        return c
    },
    u = function (a) {
        if (a instanceof Array) return a;
        var b = [];
        return $.each(a, function (a, c) {
            b = t(u(c), b)
        }), b
    },
    proficiencydata = d3
        .layout
        .partition()
        .sort(null)
        .size([2 * Math.PI, rad])
        .children(function (a) {
            return a.value instanceof Array 
                ? (a._proficiency = a.value, d3.entries([a.value[a.value.length - 1]]))
                : (a._proficiency = u(a.value), isNaN(a.value) ? d3.entries(a.value) : null)
        })
        .value(function (a) { return a.value }),
    arc = d3.svg
        .arc()
        .startAngle(function (a) { return a.x })
        .endAngle(function (a) { return a.x + a.dx - .01 / (a.depth + .5) })
        .innerRadius(function (a) { return rad / Math.PI * a.depth })
        .outerRadius(function (a) { return rad / Math.PI * (a.depth + 1) - 1 });

var coloralternative = 0
initbreadcrumb();
var path = sunburst
    .data(d3.entries(skillsdata))
    .selectAll("g")
    .data(proficiencydata)
    .enter()
    .append("svg:g")
    .attr("display", function (a) { return a.depth ? null : "none" });
	

	
path
    .append("svg:path")
    .attr("d", arc)
    .attr("stroke", "#fff") // border sun colors
    .attr("fill", function (a) { return a._color = q(a), a._color })
    .attr("fill-rule", "evenodd").attr("display", function (a) { return a.children ? null : "none" })
    .on("mouseover", mouseover); 
path.
    append("svg:text")
    .attr("transform", function (a) {
        var r = 180 * ((a.x + a.dx / 2 - Math.PI / 2) / Math.PI);
        return "rotate(" + r + ")"
    })
    .attr("x", function (a) { return rad / Math.PI * a.depth})
    .attr("dx", "6").attr("dy", ".1em").text(function (a) { return a.key })
    .attr("display", function (a) { return a.children ? null : "none" })
    .on("mouseover", mouseover);
d3	
    .select(".skills-sunburst")
    .on("mouseleave", mouseleave); 
l = path.node().__data__.value; 
sunburst
    .append("circle")
    .attr("r", rad / Math.PI)
    .attr("opacity", 0);
initchart();


});