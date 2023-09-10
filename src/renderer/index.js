let expression = ''
let allowedValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '-',
  '*',
  '/',
  '=',
  '.',
  'C',
  'Enter',
  'Backspace',
  'Delete'
]

let container = document.querySelector('.container')
let resultEl = document.querySelector('.result')

container.addEventListener('click', (e) => {
  let value = e.target.dataset.value
  if (value) {
    calculateExpression(value)
  }
})

function calculateExpression(value) {
  if (value === 'C') {
    expression = ''
  } else if (value === '=' || value === 'Enter') {
    // expression = eval(expression).toFixed(2)
    expression = `${eval(expression)}`
  } else if (value === 'Backspace' || value === 'Delete') {
    // expression = expression.slice(0, -1)
    expression = expression.substring(0, expression.length - 1)
    // expression = expression.slice(0, -1)
  } else {
    expression = expression + value
  }
  resultEl.textContent = expression
}

// window.addEventListener('keypress', (e) => { // ! keypress works only for printable characters
window.addEventListener('keydown', (e) => {
  // e.preventDefault()
  let value = e.key
  console.log(value)
  if (value === 'Enter') {
    e.preventDefault() // Prevent the default behavior of the Enter key (e.g., form submission)
  }
  if (allowedValues.includes(value)) {
    calculateExpression(value)
  }
})
