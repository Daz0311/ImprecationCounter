let saveEl = document.getElementById("save-el")
let countNum = document.getElementById("count-num")
let decrementBtn = document.getElementById("decrement-btn")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let resetButton = document.getElementById("reset-btn")

let count = 0


incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
saveBtn.addEventListener("click", save);
resetButton.addEventListener("click", reset);



function increment() {
    count += 1
    countNum.innerText = count
}

function decrement() {
    if (count > 0) {
    count -= 1
    countNum.innerText = count
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    countNum.textContent = 0;
}

function reset() {
    console.log("pressed")
    count= 0;
    countNum.innerText = 0;
    saveEl.innerText = "Previous imprecations: "

}
