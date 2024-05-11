let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count ++;
  countEl.textContent = count;
}

console.log(increment());

function decrement() {
  count --;
  countEl.textContent = count;
}
function reset() {
  count = 0;
  countEl.innerText = count;
  saveEl.innerText = "Previous Entries:  ";
}

function save() {
  let countStr = count + " - " ;
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;

}

