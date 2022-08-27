let show = document.getElementById("counter");
let value = 0;
let btnInc = document.getElementById("inc");
let btnDec = document.querySelector("#dec");
let btnRes = document.querySelector("#res");

btnInc.addEventListener("click", () => {
  value++;
  show.textContent = value;
});
btnDec.addEventListener("click", () => {
  value--;
  show.textContent = value;
});
btnRes.addEventListener("click", () => {
  value = 0;
  show.textContent = value;
});
