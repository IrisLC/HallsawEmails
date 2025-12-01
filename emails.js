let button1 = document.getElementById("button1");
let block1 = document.getElementById("block1");
button1.addEventListener("click", show1);
let button2 = document.getElementById("button2");
let block2 = document.getElementById("block2");
button2.addEventListener("click", show2);
let button3 = document.getElementById("button3");
let block3 = document.getElementById("block3");
button3.addEventListener("click", show3);

function show1() {
  block1.classList.remove("hidden");
  block2.classList.add("hidden");
  block3.classList.add("hidden");
}

function show2() {
  block2.classList.remove("hidden");
  block1.classList.add("hidden");
  block3.classList.add("hidden");
}

function show3() {
  block3.classList.remove("hidden");
  block1.classList.add("hidden");
  block2.classList.add("hidden");
}
