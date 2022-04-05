const calculator = {
  currentNumber: '',
  operator: '',
  previousNumber: '',
  cache: '',
}

const displayResult = document.querySelector('#displayResult');
  displayResult.textContent = '0';

const numberBtn = document.querySelectorAll('.numberBtn');
  numberBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      number(event.target.textContent);
      displayResult.textContent = calculator.currentNumber;
    });
  });

const operatorBtn = document.querySelectorAll('.operatorBtn');
  operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      operator(event.target.textContent);
    });
  });

const equalsBtn = document.querySelector('#equalsBtn');
  equalsBtn.addEventListener('click', () => {
    getResults(calculator.previousNumber, calculator.currentNumber, calculator.operator);
    calculator.cache = calculator.currentNumber;
    displayResult.textContent = calculator.cache;
  });

const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', allClear);

const deleteBtn = document.querySelector('#delete');
  deleteBtn.addEventListener('click', del);

function number(number) {
  calculator.currentNumber += number;
}

function operator(operator) {
  calculator.operator = operator;
  calculator.previousNumber = calculator.currentNumber;
  calculator.currentNumber = '';

}

function getResults(previousNumber, currentNumber, operator) {
  if(operator === '+') {
    const result = Number(previousNumber) + Number(currentNumber);
    calculator.currentNumber = result.toString();
  } else if(operator === '-') {
    const result = Number(previousNumber) - Number(currentNumber);
    calculator.currentNumber = result.toString();
  } else if(operator === 'x') {
    const result = Number(previousNumber) * Number(currentNumber);
    calculator.currentNumber = result.toString();
  } else if(operator === '/') {
    const result = Number(previousNumber) / Number(currentNumber);
    calculator.currentNumber = result.toString();
  }
  
}

function allClear() {
  displayResult.textContent = '0';
  calculator.currentNumber = '';
  calculator.previousNumber = '';
  calculator.operator = '';
}

function del() {
  if(calculator.currentNumber.length === 1) {
    calculator.currentNumber = calculator.currentNumber.slice(0, -1);
    displayResult.textContent = '0';
  } else {
    calculator.currentNumber = calculator.currentNumber.slice(0, -1);
    displayResult.textContent = calculator.currentNumber;
  }
}