//document.getElementById("count-el").innerText=6


let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increment() {
  count += 1 ;
  countEl.textContent = count;
}

function save() {
let number = count + " - ";
saveEl.textContent += number;  

  
}
