"use strict";

function operations() {
  if (document.getElementById('first_number').value !== '' && document.getElementById('second_number').value !== '') {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);

    if (a >= 0 && b >= 0) {
      var c = a - b;
      document.getElementById('result').innerHTML = "Разность чисел: " + c;
    } else if (a < 0 && b < 0) {
      c = a * b;
      document.getElementById('result').innerHTML = "Произведение чисел: " + c;
    } else {
      c = a + b;
      document.getElementById('result').innerHTML = "Сумма чисел: " + c;
    }
  } else {
    alert("Введите числа!!");
  }
}

function calcul_sum() {
  if (document.getElementById('first_number').value !== '' && document.getElementById('second_number').value !== '') {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);
    document.getElementById('result5').innerHTML = "Сумма чисел: " + sum(a, b);
  } else {
    alert("Введите числа!!");
  }
}

function calcul_dif() {
  if (document.getElementById('first_number').value !== '' && document.getElementById('second_number').value !== '') {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);
    document.getElementById('result5').innerHTML = "Разность чисел: " + difference(a, b);
  } else {
    alert("Введите числа!!");
  }
}

function calcul_mult() {
  if (document.getElementById('first_number').value !== '' && document.getElementById('second_number').value !== '') {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);
    document.getElementById('result5').innerHTML = "Произведение чисел: " + multiplication(a, b);
  } else {
    alert("Введите числа!!");
  }
}

function calcul_devis() {
  if (document.getElementById('first_number').value !== '' && document.getElementById('second_number').value !== '') {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);

    if (b !== 0) {
      document.getElementById('result5').innerHTML = "Деление чисел: " + division(a, b);
    } else {
      alert("Делить на ноль нельзя");
    }
  } else {
    alert("Введите числа!!");
  }
}

function sum(a, b) {
  var c = a + b;
  return c;
}

function difference(a, b) {
  return c = a - b;
}

function multiplication(a, b) {
  return c = a * b;
}

function division(a, b) {
  return c = a / b;
}

function multiOpercall() {
  if (document.getElementById('first_number').value !== '' && document.getElementById('second_number').value !== '') {
    var a = parseInt(document.getElementById('first_number').value);
    var b = parseInt(document.getElementById('second_number').value);
    var mathoper = document.getElementById('mathoper').value;

    if (mathoper !== '+' && mathoper !== '-' && mathoper !== '*' && mathoper !== '/') {
      alert("Укажите рекомендуемый вид операции!!!");
    } else {
      multiOper(a, b, mathoper);
    }
  } else {
    alert("Введите числа!!");
  }
}

function multiOper(a, b, mathoper) {
  switch (mathoper) {
    case "+":
      document.getElementById('result6').innerHTML = "Сумма чисел: " + sum(a, b);
      break;

    case "-":
      document.getElementById('result6').innerHTML = "Разность чисел: " + difference(a, b);
      break;

    case "*":
      document.getElementById('result6').innerHTML = "Произведение чисел: " + multiplication(a, b);
      break;

    case "/":
      document.getElementById('result6').innerHTML = "Деление чисел: " + division(a, b);
      break;
  }

  console.log(mathoper);
}