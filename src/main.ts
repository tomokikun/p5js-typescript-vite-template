import p5 from 'p5';

let img: p5.Image | null = null;

const setup = async (p: p5) => {
  img = await p.loadImage('./assets/sample.png');
  p.createCanvas(800, 600);
  p.background(0);
  p.ellipse(p.width / 2, p.height / 2, 100, 100);

  p.image(img, 0, 0);
};

new p5((p: p5) => {
  p.setup = () => setup(p);
});
