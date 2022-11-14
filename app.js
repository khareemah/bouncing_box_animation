const main = document.querySelector('.main');
const h1 = document.querySelector('h1');

main.style.width = '600px';
main.style.height = '400px';
main.style.background = 'black';

const ball = document.createElement('div');
const b = {
  top: 0,
  left: 0,
  y: 0,
  width: 40,
  height: 40,
  animation: {},
  move: false,
  dx: 3,
  dy: 3,
};
ball.style.backgroundColor = 'red';
ball.style.borderRadius = '50%';
ball.style.width = b.width + 'px';
ball.style.height = b.height + 'px';
ball.style.position = 'relative';
ball.style.top = b.top + 'px';
ball.style.left = b.left + 'px';
main.append(ball);

//more work to do here
h1.addEventListener('click', function () {
  if (!b.move) {
    b.animation = requestAnimationFrame(mover);
    b.move = true;
  } else {
    cancelAnimationFrame(b.animation);
    b.move = false;
  }
});

function mover() {
  if (b.left > 600 - b.width || b.left < 0) {
    b.dy *= -1;
  }
  if (b.top > 400 - b.height || b.top < 0) {
    b.dx *= -1;
  }
  b.top += b.dx;
  b.left += b.dy;

  ball.style.top = b.top + 'px';
  ball.style.left = b.left + 'px';
  if (b.move) {
    b.animation = requestAnimationFrame(mover);
  }
}
