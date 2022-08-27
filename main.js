let isRoots = document.getElementsByClassName("isRoots")[0];
let isnotRoots = document.getElementsByClassName("isnotRoots")[0];
let bottomend = document.getElementsByClassName("bottomend")[0];

let btn_calc = document.getElementById("btn_calc");

setVisible(isRoots, "none");
setVisible(isnotRoots, "none");

function setVisible(cl, vall) {
  cl.style.display = vall;
}

btn_calc.onclick = function calc() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;

  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;

  let d = b * b - 4 * a * c;

  setVisible(bottomend, "none");

  if (d < 0) {
    setVisible(isRoots, "none");
    setVisible(isnotRoots, "block");
  } else {
    setVisible(isRoots, "block");
    setVisible(isnotRoots, "none");

    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);

    document.getElementById("x1").value = x1;
    document.getElementById("x2").value = x2;


    
  }
};
