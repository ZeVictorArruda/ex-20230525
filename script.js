function sum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').innerHTML = 'Resultado: ' + result;
  
    clearInputs();
  }
  
  function subtract() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 - num2;
    document.getElementById('result').innerHTML = 'Resultado: ' + result;
  
    clearInputs();
  }
  
  function multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById('result').innerHTML = 'Resultado: ' + result;
  
    clearInputs();
  }
  
  function divide() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
      var result = num1 / num2;
      document.getElementById('result').innerHTML = 'Resultado: ' + result;
    } else {
      document.getElementById('result').innerHTML = 'Erro: divisão por zero';
    }
  
    clearInputs();
  }
  
  function clearInputs() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
  
    // Adiciona um efeito após as caixas de input serem limpas
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
      input.classList.add('cleared');
      setTimeout(function() {
        input.classList.remove('cleared');
      }, 500);
    });
  }
  