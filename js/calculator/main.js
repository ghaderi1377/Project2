let powFlag = false;
let result1 = document.getElementById("displayResult");
function addToCalculator(value) {
  result1.value += value;
  if (powFlag) {
    let powNumbers = result1.value.split("^");
    result1.value = Math.pow(powNumbers[0], powNumbers[1]);
    powFlag = false;
  }
}
function addToCalculator1(value) {
  if (result1.value != "") {
    result1.value += value;
  }
}
function addToCalculator2(value) {
  if (result1.value != "0") {
    result1.value += value;
  }
}
function addToCalculator3(value) {
  if (result1.value == "") {
    result1.value = result1.value + "0" + value;
    return;
  }
  result1.value += value;
}
function reset() {
  result1.value = "";
}
function result() {
  result1.value = eval(result1.value);
}
function mathCalculator(mathFunc) {
    if (result1.value != "") {
      if (mathFunc == "pow") {
        powFlag = true;
        result1.value += "^";
      } else {
        result1.value = Math[mathFunc](result1.value);
      }
    }
}