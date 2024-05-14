
      var powFlag = false;
      function addToCalculator(value) {
        document.getElementById("displayResult").value += value;
        if (powFlag) {
          var powNumbers = document
            .getElementById("displayResult")
            .value.split("^");
          document.getElementById("displayResult").value = Math.pow(
            powNumbers[0],
            powNumbers[1]
          );
          powFlag = false;
        }
      }
      function reset() {
        document.getElementById("displayResult").value = "";
      }
      function result() {
        document.getElementById("displayResult").value = eval(
          document.getElementById("displayResult").value
        );
      }
      function mathCalculator(mathFunc) {
        if (mathFunc == "pow") {
          powFlag = true;
          document.getElementById("displayResult").value += "^";
        } else {
          document.getElementById("displayResult").value = Math[mathFunc](
            document.getElementById("displayResult").value
          );
        }
      }