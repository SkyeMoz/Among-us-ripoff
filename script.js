const player = document.getElementById("player");

let x = 200;
let y = 200;
let speed = 10;

function updatePosition() {
  player.style.left = x + "px";
  player.style.top = y + "px";
}

function move(direction) {
  // switch to walking animation
  player.src = "settings/redwalk.gif";

  if (direction === "up") y -= speed;
  if (direction === "down") y += speed;
  if (direction === "left") {
    x -= speed;
    player.style.transform = "scaleX(-1)";
  }
  if (direction === "right") {
    x += speed;
    player.style.transform = "scaleX(1)";
  }

  updatePosition();

  // revert to idle after short delay
  setTimeout(() => {
    player.src = "settings/red.png";
  }, 200);
}
