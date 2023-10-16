const balls = [
  document.getElementById("ball"),
  document.getElementById("ball2"),
  document.getElementById("ball3")
];

let start, previousTimeStamp;
// let x = 400;
// let y = 400;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];
     let x = Math.floor(Math.random() * 30 + window.innerWidth/2 - 15);
     let y = Math.floor(Math.random() * 30 + window.innerHeight/2 - 15);
    let dx = 0.1;
    let dy = 0.1;

    

    if (previousTimeStamp !== timestamp) {
      x += dx;
      y += dy;
      //console.log(x, y);
      // if (x + 25 >= window.innerWidth || x <= 0) {
      //   dx = -dx;
      // }
      // if (y + 25 >= window.innerHeight || y <= 0) {
      //   dy = -dy;
      // }

      ball.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
  previousTimeStamp = timestamp;
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

balls[0].addEventListener('click', () => {
  let w = (window.screen.width * .8) / 2;
  let h = (window.screen.height * .8) / 2;
  let wM = (window.screen.width * .2) / 2;
  let hM = (window.screen.height * .2) / 2;

  window.open("/Final/Believe Me/puzzle/you.html", "_blank", "left=" + (0.8 * w + wM) + ",top=" + hM + ",width=335,height=369");
  window.open("/Final/Believe Me/puzzle/do.html", "_blank", "left=" + (0.9 * w + wM) + ",top=" + hM * 1.2 + ",width=334,height=370");
  window.open("/Final/Believe Me/puzzle/not.html", "_blank", "left=" + (1.2 * w + wM) + ",top=" + hM * 1.35 + ",width=334,height=146");
  window.open("/Final/Believe Me/puzzle/believe.html", "_blank", "left=" + (1.1 * w + wM) + ",top=" + hM * 1.45 + ",width=487,height=369");
  window.open("/Final/Believe Me/puzzle/me.html", "_blank", "left=" + (1 * w + wM) + ",top=" + hM * 1.6 + ", width=334, height=237");
  window.open("/Final/Believe Me/puzzle/right.html", "_blank", "left=" + (1 * w + wM) + ",top=" + hM * 1.6 + ", width=424, height=401");
});

balls[1].addEventListener('click', () => {
  let w = (window.screen.width * .8) / 2;
  let h = (window.screen.height * .8) / 2;
  let wM = (window.screen.width * .2) / 2;
  let hM = (window.screen.height * .2) / 2;

  window.open("/Final/Believe Me/puzzle/vine.html", "_blank", "left=" + (0.1 * w + 1.5 * wM) + ",top=" + 1.6 * hM + ",width=335,height=100");
  window.open("/Final/Believe Me/puzzle/clippers.html", "_blank", "left=" + (0.1 * w + 1.4 * wM) + ",top=" + 1.6 * hM + ",width=335,height=100");
  window.open("/Final/Believe Me/puzzle/time.html", "_blank", "left=" + (0.1 * w + 1.3 * wM) + ",top=" + 1.5 * hM + ",width=335,height=100");
  window.open("/Final/Believe Me/puzzle/bowl.html", "_blank", "left=" + (0.1 * w + 1.2 * wM) + ",top=" + 1.4 * hM + ",width=335,height=100");
  window.open("/Final/Believe Me/puzzle/loft.html", "_blank", "left=" + (0.1 * w + wM) + ",top=" + 1.3 * hM + ",width=335,height=100");
})

balls[2].addEventListener('click', () => {
  let w = (window.screen.width * .8) / 2;
  let h = (window.screen.height * .8) / 2;
  let wM = (window.screen.width * .2) / 2;
  let hM = (window.screen.height * .2) / 2;

  window.open("/Final/Believe Me/puzzle/closeness.html", "_blank", "left=" + (w + 1 * wM) + ",top=" + 4 * hM + ",width=850,height=388");
})