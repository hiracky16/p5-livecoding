import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

let xspacing = 8; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 100.0; // Height of wave
let period = 100.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
const calcWave = (p5) => {
	theta += 0.02;
	let x = theta;
	for (let i = 0; i < yvalues.length; i++) {
		yvalues[i] = Math.sin(x) * amplitude + Math.cos(1/2*x) * amplitude;


		x	+= dx;
	}
}

const renderWave = (p5) => {
	let r = p5.random(0, 255);
	let g = p5.random(0, 255);
	let b = p5.random(0, 255);
	p5.noStroke();
	p5.fill(r, g, b);
	for (let x = 0; x < yvalues.length; x++) {
		p5.ellipse(x * xspacing, p5.height / 2 + yvalues[x], 16, 16);
	}
}

window.onload = function () {

  const sketch = (p5) => {
    window.p5 = p5;
    p5.setup = () => {
 			const canvas = p5.createCanvas(1200, 200);
  		w = p5.width + 16;
  		dx = (p5.TWO_PI / period) * xspacing;
  		yvalues = new Array(p5.floor(w / xspacing));
      const context = canvas.elt.getContext('2d');
      canvas.parent('canvas');
			p5.randomSeed(99);
		}

    p5.draw = () => {
			p5.background(0);
  		calcWave(p5);
  		renderWave(p5);
		}
  }
  new p5(sketch);
}
