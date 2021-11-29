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
var color = 0;
var fft;
var audio;








function preload() {
	audio = loadSound('Bounce.mp3');
}

function setup() {
	canvas = createCanvas(W, H);
	background(0);
	canvas.mouseClicked(togglePlay);
	fft = new p5.FFT(0.7, 64);

}
function draw() {
	background(0);
	strokeWeight(0);
	stroke(100);
	rectMode(CENTER);
	var margin = 20;
	let spectrum = fft.analyze();
	for (let i=20; i < spectrum.length;i++) {
		// fill(i*10+20,0,i*4);
		if (i == 20) {
			fill(255);
			circle(W/2, 100, spectrum[i]/5, 30);
		}
		else {
			fill(255);
			rect(margin, H/2, 10,  spectrum[i], 10);
			margin += 20;		
		}
	}
}
function togglePlay() {
  if (audio.isPlaying()) {
    audio.pause();
  } else {
    audio.loop();
  }
}
