const container = document.querySelector(".container");
const getColor = document.querySelector("#getColor");
const reset = document.querySelector(".reset");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const lineWidthInput = document.querySelector(".lineWidth");
let lineWidth = Number(lineWidthInput.value);
let draw = false;

const parentWidth = container.offsetWidth;
const parentHeight = container.offsetHeight;

// style and prepare the canvas to work
const canvas = document.querySelector("#canvas");
canvas.setAttribute("width", parentWidth);
canvas.setAttribute("height", parentHeight - 50);
const ctx = canvas.getContext("2d");
ctx.lineWidth = lineWidth;
ctx.strokeStyle = getColor.value;

// draw on the canvas
canvas.addEventListener("mousemove", (e) => {
  drawing(e);
});

canvas.addEventListener("mousedown", (e) => {
  draw = true;
  drawing(e);
});

canvas.addEventListener("mouseup", () => {
  draw = false;
});

function drawing(e) {
  if (!draw) return;
  let x = e.clientX;
  let y = e.clientY;
  ctx.beginPath();
  ctx.lineTo(x - canvas.offsetLeft, y - canvas.offsetTop);
  ctx.lineCap = "round";
  ctx.stroke();
}

// decrement the line width by 5 and the minimum is 5 and show the new value
decrement.addEventListener("click", () => {
  if (lineWidth === 5) {
    lineWidth = 5;
    lineWidthInput.setAttribute("placeholder", lineWidth);
    lineWidthInput.setAttribute("value", lineWidth);
    ctx.lineWidth = lineWidth;
  } else {
    lineWidth -= 5;
    lineWidthInput.setAttribute("placeholder", lineWidth);
    lineWidthInput.setAttribute("value", lineWidth);
    ctx.lineWidth = lineWidth;
  }
});

// increment the line width by 5 and the top is 50 and show the new value
increment.addEventListener("click", () => {
  if (lineWidth === 50) {
    lineWidth = 50;
    lineWidthInput.setAttribute("placeholder", lineWidth);
    lineWidthInput.setAttribute("value", lineWidth);
    ctx.lineWidth = lineWidth;
  } else {
    lineWidth += 5;
    lineWidthInput.setAttribute("placeholder", lineWidth);
    lineWidthInput.setAttribute("value", lineWidth);
    ctx.lineWidth = lineWidth;
  }
});

// reset the canvas work space
reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
