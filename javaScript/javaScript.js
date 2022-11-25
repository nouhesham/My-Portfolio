"strict";
const header = document.querySelector("#header");
const icon = document.querySelector("#icon1");
const main = document.querySelector(".Main");
let x = 0;
console.log(x);
const again = function () {
  x = x === 0 ? 1 : 0;
  // console.log(x);
};

const bright = function () {
  // console.log(x);
  if (x === 0) {
    main.style.backgroundImage = "url(images/second.jpeg)";
    header.style.backgroundColor = "purple";
    console.log(main.style);
  } else if (x === 1) {
    main.style.backgroundImage = "url(images/firstphoto.jpeg)";
    header.style.backgroundColor = "purple";
    console.log(x);
  }
  again();
  // console.log(x);
};

document.getElementById("icon1").addEventListener("click", bright);
