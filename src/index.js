import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

window.onload = function () {

  const sketch = (p5) => {
    window.p5 = p5;
    p5.setup = () => {
		  const canvas = p5.createCanvas(800, 800)
      const context = canvas.elt.getContext('2d');
      canvas.parent('canvas');
		}
  
    p5.draw = () => {
      p5.background(255);
			p5.ellipse(400, 400, 80, 80);
			p5.ellipse(500, 400, 80, 80);
			p5.ellipse(600, 400, 80, 80);
			p5.ellipse(400, 500, 80, 80);
			p5.ellipse(500, 500, 80, 80);
			p5.ellipse(600, 500, 80, 80);
			p5.ellipse(600, 600, 80, 80);
			p5.ellipse(400, 600, 80, 80);
			p5.ellipse(500, 600, 80, 80);
    }
  }
  
  new p5(sketch);
}
