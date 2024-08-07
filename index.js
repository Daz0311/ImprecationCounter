let saveEl = document.getElementById("save-el")
let countNum = document.getElementById("count-num")
let count = 0

console.log(countNum)


function increment() {
    count += 1
    countNum.innerText = count
}

function decrement() {
    count -= 1
    countNum.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
}