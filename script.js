const BILL = document.querySelector('.bill input')

const TIPS = document.querySelectorAll('.grid div input')
const CUSTOM = document.querySelector('.grid > input')
const PEOPLE = document.querySelector('.people > input')
const reset = document.querySelector('.result button')
const tipPerson = document.querySelector('.result p:nth-of-type(2)')
const totalPerson = document.querySelector('.result p:last-of-type')

let bill = 1
let tip = 1
let people = 1

console.log(reset)

BILL.addEventListener('input', (e) => bill = e.target.value)
TIPS.forEach(a => a.addEventListener('click', (e) => tip = e.target.value))
CUSTOM.addEventListener('input', (e) => tip = e.target.value)
PEOPLE.addEventListener('input', calculate)
PEOPLE.addEventListener('change', calculate)


reset.addEventListener('click', () => {
    BILL.value = 0
    PEOPLE.value = 0
    TIPS.forEach(e => e.removeAttribute('checked'))
    tipPerson.textContent = '$0.00'
    totalPerson.textContent = '$0.00'
})

console.log(tipPerson)

function calculate() {
    people = this.value
    tipPerson.textContent = (bill * tip / 100 / people).toFixed(2)
    totalPerson.textContent = ((bill * tip / 100 + bill / 1) / people).toFixed(2)
}

// console.log(totalPerson)





