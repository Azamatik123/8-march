let canvas;
let ctx;
let snake;
let apple;
let score = 0;

function startGame() {
  document.getElementById('slide1').style.display = 'none';
  document.getElementById('slide2').style.display = 'block';
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
  snake = new Snake();
  apple = new Apple();
  setInterval(gameLoop, 100);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.update();
  snake.draw();
  apple.draw();
  if (snake.eat(apple)) {
    score += 10;
    document.getElementById('score').innerHTML = 'Очки: ' + score;
    if (score >= 10) {
      endGame();
    }
  }
}

function endGame() {
  document.getElementById('slide2').style.display = 'none';
  document.getElementById('slide3').style.display = 'block';
}
