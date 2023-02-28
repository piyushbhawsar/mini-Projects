let textEl = document.getElementById("text-el")
const incBtn = document.getElementById("inc-btn")
const decBtn = document.getElementById("dec-btn")
const countFromStorage = JSON.parse(localStorage.getItem("count"))
let count = 0

if(JSON.parse(countFromStorage)) count = countFromStorage
textEl.textContent = count

incBtn.addEventListener("click" , () => {
    textEl.textContent = ++count
    localStorage.setItem("count" , JSON.stringify(count))
})

decBtn.addEventListener("click" , () => {
    textEl.textContent = --count
    localStorage.setItem("count" , JSON.stringify(count))
})

textEl.addEventListener("dblclick" , () => {
    localStorage.clear()
    count = 0
    textEl.textContent = count ;
})