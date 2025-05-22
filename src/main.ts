import p5 from 'p5';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const preload = (_p: p5) => {
  // Preload assets if needed
  // p.loadImage('path/to/image.png');
};

const setup = (p: p5) => {
  p.createCanvas(800, 600);
};

const draw = (p: p5) => {
  p.background(0);
  p.ellipse(p.width / 2, p.height / 2, 100, 100);
};

new p5((p: p5) => {
  p.preload = () => preload(p);
  p.setup = () => setup(p);
  p.draw = () => draw(p);
});
