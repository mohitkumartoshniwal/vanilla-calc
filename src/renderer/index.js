let operators = ['+', '-', 'x', '/', '%', '=', 'C', '.', '^']

let result = 0
let lastOperator = ''
let lastValue = ''
let initialStart = false

let container = document.querySelector('.container')
let resultEl = document.querySelector('.result')

container.addEventListener('click', (e) => {
  debugger

  let value = e.target.dataset.value
  if (value) {
    if (operators.includes(value)) {
      if (value === '+') {
        lastOperator = value
      } else if (value === '-') {
        lastOperator = value
      } else if (value === 'x') {
        lastOperator = value
      } else if (value === '/') {
        lastOperator = value
      } else if (value === '%') {
        lastOperator = value
      } else if (value === 'C') {
        result = 0
      } else if (value === '.') {
        lastOperator = '.'
      } else if (value === '^') {
        lastOperator = '^'
      } else if (value === '=') {
        // TODO
        // lastOperator = '^'
      }
      if (!initialStart) {
        calculateResult(lastValue)
        initialStart = true
      }
    } else if (lastOperator !== '') {
      calculateResult(value)
      lastOperator = ''
    } else {
      lastValue = lastValue + value
      resultEl.textContent = lastValue
    }
  }
})

function calculateResult(value) {
  debugger
  if (lastOperator === '+') {
    result = result + Number(value)
  } else if (lastOperator === '-') {
    result = result - Number(value)
  } else if (lastOperator === 'x') {
    result = result * Number(value)
  } else if (lastOperator === '/') {
    result = result / Number(value)
  } else if (lastOperator === '%') {
    result = result % Number(value)
  } else if (lastOperator === '^') {
    result = result ^ Number(value)
  }
  resultEl.textContent = result
}

// function doAThing() {
//   const versions = window.electron.process.versions
//   replaceText('.electron-version', `Electron v${versions.electron}`)
//   replaceText('.chrome-version', `Chromium v${versions.chrome}`)
//   replaceText('.node-version', `Node v${versions.node}`)
//   replaceText('.v8-version', `V8 v${versions.v8}`)
// }
