//notes:
//setup runs once, draw runs over and over



 function setup() { //function is box of code that does things that are connected
  createCanvas(400, 400);//(width of the canvas, hight of canvas)
background(10,125,150)}

function draw() {
  fill(48,48,48)
  circle(mouseX,mouseY,80)
  
  fill(100,0,0)
  circle(200,200,80)
    fill(0,100,0)
  circle(200,100,80) 
  fill(255,140,0)
  circle(200,300,80)
 
}