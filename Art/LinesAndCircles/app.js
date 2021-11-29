// Using ps5.js.
// Using Ps5.FFT().
// Using Audio Api.
//  How to record audio: mic = ps5.AudioIn() => mic.start() => mic.getLevel()
// var canvas;
// const audio;
/*
making a circle:
	
	
	
*/
const r = 100;
const W = 500;
const H = 500;
var i = 1;
var j = 1;
var x, y;

var dx = 0;
var vel = 10;
// var color = 0;
// var fft;
// var audio;




function setup() {
	canvas = createCanvas(W, H);
	background(0);
	angleMode(DEGREES);
	y = H/2;
	x = W/2;
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(2)
	noFill(255)
	line(0 + 50 + 15, 500 - 50 + 15, 500 - 50 + 15, 0 + 50 + 15);
	line(0 + 50, 500 - 50, 500 - 50, 0 + 50);
	line(0 + 50 - 15, 500 - 50 - 15, 500 - 50 - 15, 0 + 50 - 15);
	line(50, 50, 450, 450)
	line(50 + 15, 50 - 15, 450 + 15, 450 - 15)
	line(50 - 15, 50 + 15, 450 - 15, 450 + 15)
	noStroke()
	fill(255);
	circle(W/2, H/2, 10);
	var c = [-1, 1]
	for(let i=0; i < c.length;i++) {
		circle((W/2)+30*c[i], H/2, 10)
	}
	stroke(255);
	noFill();
	translate(H/2, W/2)
	beginShape()
	for(let i=0; i <= 360;i++) {
		var x = r * cos(i);		
		var y = r * sin(i);
		vertex(x, y)
	}
	endShape()
}
