function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.innerHTML += value;
  }
  
  function clearDisplay() {
    var display = document.getElementById('display');
    display.innerHTML = '';
  }
  
  function deleteLastCharacter() {
    var display = document.getElementById('display');
    var currentValue = display.innerHTML;
    display.innerHTML = currentValue.slice(0, -1);
  }
  
  function calculateResult() {
    var display = document.getElementById('display');
    var expression = display.innerHTML;
    var result = eval(expression); 
    display.innerHTML = result;
  }
  
