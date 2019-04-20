var seattle = [{
    "City": "Seattle",
    "Date": "4/15/19 12:00 AM",
    "Actual": 65.94,
    "Forecast": 69.13
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 1:00 AM",
    "Actual": 63.86,
    "Forecast": 67.81
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 2:00 AM",
    "Actual": 60.91,
    "Forecast": 65.06
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 3:00 AM",
    "Actual": 57.49,
    "Forecast": 62.98
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 4:00 AM",
    "Actual": 56.33,
    "Forecast": 60.73
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 5:00 AM",
    "Actual": 55.46,
    "Forecast": 59.4
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 6:00 AM",
    "Actual": 55.57,
    "Forecast": 58.4
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 7:00 AM",
    "Actual": 55.97,
    "Forecast": 57.67
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 8:00 AM",
    "Actual": 55.59,
    "Forecast": 57.21
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 9:00 AM",
    "Actual": 55.78,
    "Forecast": 56.89
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 10:00 AM",
    "Actual": 55.62,
    "Forecast": 56.69
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 11:00 AM",
    "Actual": 55.76,
    "Forecast": 56.65
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 12:00 PM",
    "Actual": 55.87,
    "Forecast": 56.96
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 1:00 PM",
    "Actual": 55.87,
    "Forecast": 57.03
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 2:00 PM",
    "Actual": 55.82,
    "Forecast": 57
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 3:00 PM",
    "Actual": 56.98,
    "Forecast": 57.48
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 4:00 PM",
    "Actual": 57.85,
    "Forecast": 58.54
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 5:00 PM",
    "Actual": 58.93,
    "Forecast": 60.15
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 6:00 PM",
    "Actual": 60.26,
    "Forecast": 61.99
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 7:00 PM",
    "Actual": 60.92,
    "Forecast": 63.55
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 8:00 PM",
    "Actual": 61.84,
    "Forecast": 66.03
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 9:00 PM",
    "Actual": 63,
    "Forecast": 67.86
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 10:00 PM",
    "Actual": 66.38,
    "Forecast": 69.39
  },
  {
    "City": "Seattle",
    "Date": "4/15/19 11:00 PM",
    "Actual": 63.37,
    "Forecast": 70.05
  }];
am4core.useTheme(am4themes_animated);

// create chart
var chart = am4core.create("chartdiv", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;

var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = 0;
axis.max = 100;
axis.strictMinMax = true;
axis.renderer.inside = true;
//axis.renderer.ticks.template.inside = true;
//axis.stroke = chart.colors.getIndex(3);
axis.renderer.radius = am4core.percent(97);
//axis.renderer.radius = 80;
axis.renderer.line.strokeOpacity = 1;
axis.renderer.line.strokeWidth = 5;
axis.renderer.line.stroke = chart.colors.getIndex(0);
axis.renderer.ticks.template.stroke = chart.colors.getIndex(0);
axis.renderer.labels.template.radius = 35;
axis.renderer.ticks.template.strokeOpacity = 1;
axis.renderer.grid.template.disabled = true;
axis.renderer.ticks.template.length = 10;
axis.hiddenState.properties.opacity = 1;
axis.hiddenState.properties.visible = true;
axis.setStateOnChildren = true;
axis.renderer.hiddenState.properties.endAngle = 180;
 

var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = 0;
axis2.max = 100;
axis2.strictMinMax = true;

axis2.renderer.line.strokeOpacity = 1;
axis2.renderer.line.strokeWidth = 5;
axis2.renderer.line.stroke = chart.colors.getIndex(3);
axis2.renderer.ticks.template.stroke = chart.colors.getIndex(3);

axis2.renderer.ticks.template.strokeOpacity = 1;
axis2.renderer.grid.template.disabled = true;
axis2.renderer.ticks.template.length = 10;
axis2.hiddenState.properties.opacity = 1;
axis2.hiddenState.properties.visible = true;
axis2.setStateOnChildren = true;
axis2.renderer.hiddenState.properties.endAngle = 180;

var hand = chart.hands.push(new am4charts.ClockHand());
hand.fill = axis.renderer.line.stroke;
hand.stroke = axis.renderer.line.stroke;
hand.axis = axis;
hand.pin.radius = 14;
hand.startWidth = 10;

var axis3 = chart.xAxes.push(new am4charts.ValueAxis());
// 1) find where the color is black and set to white (we don't 
// need the needle)

// 2) similar to the loop for the temperature, use a function to
// get the times in an array

// 3) use a similar process (shift) 

// axis3.min = 0;
// axis3.max = 100;
// axis3.strictMinMax = true;

// axis3.renderer.line.strokeOpacity = 1;
// axis3.renderer.line.strokeWidth = 5;
// axis3.renderer.line.stroke = chart.colors.getIndex(3);
// axis3.renderer.ticks.template.stroke = chart.colors.getIndex(3);

// axis3.renderer.ticks.template.strokeOpacity = 1;
// axis3.renderer.grid.template.disabled = true;
// axis3.renderer.ticks.template.length = 10;
// axis3.hiddenState.properties.opacity = 1;
// axis3.hiddenState.properties.visible = true;
// axis3.setStateOnChildren = true;
// axis3.renderer.hiddenState.properties.endAngle = 180;

//axis3.min = 0;
//axis3.max = 23;
//axis3.strictMinMax = true;
//axis3.renderer.inside = true;
//axis.renderer.ticks.template.inside = true;
//axis.stroke = chart.colors.getIndex(3);
//axis3.renderer.radius = am4core.percent(97);
//axis.renderer.radius = 80;
//axis3.renderer.line.strokeOpacity = 1;
//axis3.renderer.line.strokeWidth = 5;
//axis3.renderer.line.stroke = chart.colors.getIndex(6);
//axis3.renderer.ticks.template.stroke = chart.colors.getIndex(6);
//axis3.renderer.labels.template.radius = 35;
//axis3.renderer.ticks.template.strokeOpacity = 1;
//axis3.renderer.grid.template.disabled = true;
//axis3.renderer.ticks.template.length = 10;
//axis3.hiddenState.properties.opacity = 1;
//axis3.hiddenState.properties.visible = true;
//axis3.setStateOnChildren = true;
//axis3.renderer.hiddenState.properties.endAngle = 180;
 

var hand2 = chart.hands.push(new am4charts.ClockHand());
hand2.fill = axis2.renderer.line.stroke;
hand2.stroke = axis2.renderer.line.stroke;
hand2.axis = axis2;
hand2.pin.radius = 10;
hand2.startWidth = 10;

var hand3 = chart.hands.push(new am4charts.ClockHand());
hand3.fill = axis3.renderer.line.stroke;
//hand3.stroke = axis3.renderer.line.stroke;
//hand3.axis = axis3;
//hand3.pin.radius = 10;
//hand3.startWidth = 10;

// loop through boston, define an array, push the actual values to the array
// in setInterval, do a for loop
actual_data = []
for_data = []
time_data = []
//actual_data2=[]
//for_data2=[]
for (let i =0; i<seattle.length; i++) {
  actual_data.push(seattle[i]["Actual"]) 
  for_data.push(seattle[i]["Forecast"])
  time_data.push(seattle[i]["Date"])
}

setInterval(() => {
  hand.showValue(actual_data.shift(),1000,am4core.ease.cubicOut);
  label.text = (hand.value) + " ºF";
  hand2.showValue(for_data.shift(), 1000, am4core.ease.cubicOut);
  label2.text = (hand2.value) + " ºF";
  hand3.showValue(time_data.shift(),1000,am4core.ease.cubicOut);
  label3.text = (hand3.value);
  },5500)


// for (let i=0; i<boston.length; i++) {
//   // (if i == i) {break}
//   setInterval(() => {
//     hand.showValue(boston[i]['Actual'],1000,am4core.ease.cubicOut);
//     label.text = "" + Math.round(hand.value);
//     hand2.showValue(boston[i]["Forecast"], 1000, am4core.ease.cubicOut);
//     label2.text = "" + Math.round(hand2.value);
//   },0)
  


// setInterval(() => {
//  hand.showValue([55,56,57], 1000, am4core.ease.cubicOut);
//  label.text = "" + Math.round(hand.value);
//  hand2.showValue(boston[0]["Forecast"], 1000, am4core.ease.cubicOut);
//  label2.text = "" + Math.round(hand2.value);
// }, 3000);

var legend = new am4charts.Legend();
legend.isMeasured = true;
legend.y = am4core.percent(100);
legend.verticalCenter = "bottom";
legend.parent = chart.chartContainer;
legend.data = [{
 "name": "Actual",
 "fill": chart.colors.getIndex(0)
}, {
 "name": "Forecast",
 "fill": chart.colors.getIndex(3)
}, {
  "name": "Seattle",
  "fill": chart.colors.getIndex(6)
}];


var labelList = new am4core.ListTemplate(new am4core.Label());
labelList.template.isMeasured = false;
labelList.template.background.strokeWidth = 2;
labelList.template.fontSize = 25;
labelList.template.padding(10, 20, 10, 20);
labelList.template.y = am4core.percent(50);
labelList.template.horizontalCenter = "middle";

var label = labelList.create();
label.parent = chart.chartContainer;
label.x = am4core.percent(40);
label.background.stroke = chart.colors.getIndex(0);
label.fill = chart.colors.getIndex(0);
label.text = "0";

var label2 = labelList.create();
label2.parent = chart.chartContainer;
label2.x = am4core.percent(60);
label2.background.stroke = chart.colors.getIndex(3);
label2.fill = chart.colors.getIndex(3);
label2.text = "0";

var label3 = labelList.create();
label3.parent = chart.chartContainer;
label3.x = am4core.percent(85);
label3.background.stroke = chart.colors.getIndex(1);
label3.fill = chart.colors.getIndex(3)
label3.text= "0";

legend.itemContainers.template.events.on("hit", function(ev) {
 var index = ev.target.dataItem.index;
 if (ev.target.isActive) {
   chart.hands.getIndex(index).show();
   chart.xAxes.getIndex(index).show();
   labelList.getIndex(index).show();
 }
 else {
   chart.hands.getIndex(index).hide();
   chart.xAxes.getIndex(index).hide();
   labelList.getIndex(index).hide();
 }
  

});
