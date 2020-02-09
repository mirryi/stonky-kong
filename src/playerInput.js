import { player, start, isLooping } from "./main";

let up = false;
let down = false;
let left = false;
let right = false;
let started = false;

export function setupKeyListener() {
  document.addEventListener("keydown", function(event) {
    if (!started && event.key === "\\") {
      start();
      started = true;
      isLooping = true;
    }
    else if (started && event.key === "\\"){
        started = false;
        hide();
        isLooping = false;
    }

    if (event.key === " " || event.key === "ArrowUp" || event.key === "w") {
      up = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      down = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      left = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      right = true;
    }
  });
  document.addEventListener("keyup", function(event) {
    if (event.key === " " || event.key === "ArrowUp" || event.key === "w") {
      up = false;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      down = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      left = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      right = false;
    }
  });
}

export function updatePlayer() {
  player.move(up, down, left, right);
}
