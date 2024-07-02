let input = document.getElementById('input-number')
let grid = document.getElementById('grid')
let numWarning = document.getElementById('max-num-warning')

function generateNumbers() {
  let inputNum = Number(input.value)
  if (inputNum > 10000) {
    inputNum = 10000
    numWarning.textContent = 'Input is limited to 10,000 to prevent your computer from lagging.'
  } else {
    numWarning.textContent = ''
  }

  if (Math.floor(inputNum) !== inputNum && inputNum < 0) {
    document.querySelector('p').textContent = 'number must be at least 1 and not a decimal'
    return;
  } else if (Math.floor(inputNum) !== inputNum) {
    document.querySelector('p').textContent = 'number cannot be a decimal'
  } else if (inputNum < 1) {
    document.querySelector('p').textContent = 'number must be at least 1'
  } else {
    document.querySelector('p').textContent = ''

    grid.textContent = ''

    inputNum += 1
    let primeNums = [2]
    for (let i = 0; i < inputNum; i++) {
      let numberElement = document.createElement('div')
      numberElement.className = 'elements'
      let isBroken = false
      if (i > 2) {
        for (let prime of primeNums) {
          if (i % prime === 0) {
            if (i % 2 === 0) {
              numberElement.style.backgroundColor = 'rgb(247, 220, 92)'
            } else {
              numberElement.style.backgroundColor = 'rgb(91, 188, 122)'
            }
            isBroken = true
            break
          }

        }
        if (!isBroken) {
          numberElement.style.backgroundColor = 'rgb(235, 105, 91)'
          primeNums.push(i)
        }
      } else if (i === 2) {
        numberElement.style.backgroundColor = 'rgb(235, 105, 91)'
      } else if (i % 2 === 0) {
        numberElement.style.backgroundColor = 'rgb(247, 220, 92)'
      } else {
        numberElement.style.backgroundColor = 'rgb(91, 188, 122)'
      }
      numberElement.textContent = i;
      grid.appendChild(numberElement)
    }
  }
}

document.getElementById('button').addEventListener('click', generateNumbers)
addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    generateNumbers()
  }
})

