//document.getElementById("count-el").innerText=6


let countEl = document.getElementById("count-el"); //h2 numbers
let saveEl = document.getElementById("save-el");   // p previous entries
let count = 0;

console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let message = count + " - ";
  saveEl.textContent += message;

  countEl.textContent = 0;
  count = 0;
}
