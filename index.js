var arrays = [];
function handleAddArray() {
  var number = +document.querySelector(".number").value;
  var array = document.querySelector(".array");
  arrays.push(number);
  array.innerHTML = `
    [ ${arrays} ] 
    `;
}

function handleRemoveArray() {
  var number = +document.querySelector(".number").value;
  var array = document.querySelector(".array");
  arrays.pop(number);
  array.innerHTML = `
      [ ${arrays} ] 
      `;
}

var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4 = document.getElementById("result4");
var result5 = document.getElementById("result5");
var result6 = document.getElementById("result6");
var result7 = document.getElementById("result7");

function handleQuestion1() {
  var sum = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      sum += arrays[i];
    }
    result1.innerHTML = `
          Tổng số dương: ${sum}
        `;
  }
}

function handleQuestion2() {
  var count = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      count += 1;
    }
  }

  result2.innerHTML = `
    Số dương: ${count}
  `;
}

function handleQuestion3() {
  var min = arrays[0];
  for (var i = 1; i < arrays.length; i++) {
    if (arrays[i] < min) {
      min = arrays[i];
    }
  }

  result3.innerHTML = `
      Số nhỏ nhất: ${min}
    `;
}

function handleQuestion4() {
  var soduong = [];
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      soduong.push(arrays[i]);
    }
  }

  var min1 = soduong[0];
  if (soduong.length > 0) {
    for (var j = 1; j < soduong.length; j++) {
      if (soduong[j] < min1) {
        min1 = soduong[j];
      }
    }
    result4.innerHTML = `
      Số dương nhỏ nhất: ${min1}
    `;
  } else {
    result4.innerHTML = `
    Không tìm thấy số dương
  `;
  }
}

function handleQuestion5() {
  var lastEvenNumber;
  var count = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] % 2 === 0) {
      lastEvenNumber = arrays[i];
      count += 1;
    }
  }
  if (count === 0) {
    result5.innerHTML = `
    -1
  `;
  } else {
    result5.innerHTML = `
    Số chẵn cuối cùng: ${lastEvenNumber}
  `;
  }
}

function handleQuestion6() {
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  if (number1 < 0 || number2 < 0) {
    alert("Không đổi chỗ được với số âm, vui lòng nhập lại");
  } else {
    var midle = arrays[number1];
    arrays[number1] = arrays[number2];
    arrays[number2] = midle;

    result6.innerHTML = `
    Mảng sau khi đổi: [ ${arrays} ]
  `;
  }
}

function handleQuestion7() {
  arrays.sort((a, b) => a - b);

  result7.innerHTML = `
    Sắp xếp: ${arrays}
  `;
}

function isPrime(n) {
  var flag = 1;

  if (n < 2) {
    return (flag = 0);
  }

  for (var i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      flag = 0;
      break;
    }
  }
  return flag;
}

function handleQuestion8() {
  var count = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (isPrime(arrays[i]) === 1) {
      result8.innerHTML = `
    Số nguyên tố đầu tiên: ${arrays[i]}
  `;
      count += 1;
      break;
    }
  }
  if (count < 1) {
    result8.innerHTML = `
    -1
  `;
  }
}

var realNumbers = [];
function handleQuestion9More() {
  var input9 = +document.getElementById("input9").value;
  var resultAdd = document.getElementById("result-add");

  realNumbers.push(input9);

  resultAdd.innerHTML = `
  [ ${realNumbers} ]
  `;
}

function handleQuestion9() {
  var count = 0;
  for (var i = 0; i < realNumbers.length; i++) {
    if (Number.isInteger(realNumbers[i])) {
      count += 1;
    }
  }

  result9.innerHTML = `
  Số nguyên: ${count}
`;

  if (count < 1) {
    result9.innerHTML = `
  Không có số nguyên nào
`;
  }
}

function handleQuestion10() {
  var positiveNumber = 0;
  var negativeNumber = 0;

  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      positiveNumber += 1;
    }
    if (arrays[i] < 0) {
      negativeNumber += 1;
    }
  }

  if (positiveNumber > negativeNumber) {
    result10.innerHTML = `
  Số dương > Số âm
`;
  } else if (positiveNumber < negativeNumber) {
    result10.innerHTML = `
  Số dương < Số âm
`;
  } else {
    result10.innerHTML = `
  Số dương = Số âm
`;
  }
}
