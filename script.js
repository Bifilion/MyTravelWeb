let slide = document.querySelectorAll(".slide");
var current = 0;

function cls() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
}

function next() {
  cls();
  if (current === slide.length - 1) current = -1;
  current++;

  slide[current].style.display = "block";
  slide[current].style.opacity = 0.4;

  var x = 0.4;
  var intX = setInterval(() => {
    x += 0.1;
    slide[current].style.opacity = x;
    if (x >= 1) {
      clearInterval(intX);
      x = 0.4;
    }
  }, 100);
}

function prev() {
  cls();
  if (current === 0) current = slide.length;
  current--;

  slide[current].style.display = "block";
  slide[current].style.opacity = 0.4;

  var x = 0.4;
  var intX = setInterval(() => {
    x += 0.1;
    slide[current].style.opacity = x;
    if (x >= 1) {
      clearInterval(intX);
      x = 0.4;
    }
  }, 100);
}

function start() {
  cls();
  slide[current].style.display = "block";
}

start();

/* gallery filter */

let sortBtn = document.querySelector(".filter-menu").children;
let sortItem = document.querySelector(".filter-item").children;

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }

    this.classList.add("current");

    let targetData = this.getAttribute("data-target");

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove("active");
      sortItem[k].classList.add("delete");

      if (
        sortItem[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        sortItem[k].classList.remove("delete");
        sortItem[k].classList.add("active");
      }
    }
  });
}
