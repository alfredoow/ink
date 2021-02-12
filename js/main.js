function sellInk() {
  money += ink * 100; // by default 1L give 10$
  ink = 0.0;
}

function display() {
  for (let i = 0; i < 5; i++) {
    checkifml(i); //converts the units from mL to L
  }
}

function addIPS() {
  if (ink + ips < totalsize) {
    ink += ips;
  } else if (ink + ips >= totalsize) {
    ink = totalsize;
  }
}

window.setInterval(function () {
  addIPS();
}, 1000)

window.setInterval(function () {
  display();
}, 100); //miliseconds