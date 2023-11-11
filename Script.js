
function setLable() {
  var input_lable = document.getElementById("unit1").value;
  var output_lable = document.getElementById("unit2").value;
  document.getElementById("input-lable").innerHTML = input_lable;
  document.getElementById("output-lable").innerHTML = output_lable;
  convert();
}

const swap = () => {
  var unit1 = document.getElementById("unit1").value;
  var unit2 = document.getElementById("unit2").value;
  document.getElementById("unit1").value = unit2;
  document.getElementById("unit2").value = unit1;
  setLable();
  convert();
}

const reset = () => {
 document.getElementById("output-value").innerHTML = "";
 document.getElementById("Calculation").innerHTML = "";
}
const setOutput = (result) => {
  var output = document.getElementById("output-value");
  // var r = result.toFixed(2);
  output.innerHTML = `${result}`;
};

const convert = () => {
  var unit1 = document.getElementById("unit1").value;
  var unit2 = document.getElementById("unit2").value;
  var input = document.getElementById("input-value").value;
  input =  parseFloat(input);
  var calculation = document.getElementById("Calculation");
  
  if (unit1 === "celsius") {
    if (unit2 === "fahrenheit") {
      var result = (input * 9) / 5 + 32;
      setOutput(result);
      calculation.cols = "100";
      calculation.style.height = "5rem";
      calculation.innerHTML = `(${input}°C x 9/5) + 32 = ${result}°F`;
    } else if (unit2 === "kelvin") {
      if (input === "0") var result = 273.15;
      else var result = input + 273.15;
      setOutput(result);
      calculation.innerHTML = `${input}°C + 273.15 = ${result}K`;
    } else if (unit2 === "rankine") {
      var result = ((input + 273.15) * 9) / 5;
      setOutput(result);
      calculation.innerHTML = `(${input}°C + 273.15) x 9/5 = ${result}°R`;
    } else if (unit2 === "celsius") {
      alert("Please select a valid conversion.");
      reset();
    }
  } else if (unit1 === "fahrenheit") {
    if (unit2 === "celsius") {
      var result = (input - 32) * 5/9;
      setOutput(result);
      calculation.innerHTML = `(${input}°F - 32) x 5/9 = ${result}°C`;
    }
    else if(unit2 === "kelvin"){
        var result = ((input+459.67)*5)/9;
        setOutput(result);
        calculation.innerHTML = `(${input}°F + 459.67) x 5/9 = ${result}K`;
    }
    else if(unit2 === "rankine"){
        var result = input + 459.67 ;
        setOutput(result);
        calculation.innerHTML = `${input}°F + 459.67 = ${result}°R`;
    }
    else if(unit2 === "fahrenheit"){
      alert("Please select a valid conversion.");
      reset();
    }
  }
  else if(unit1 === "kelvin"){
    if(unit2 === "celsius"){
      var result = input - 273.15;
      setOutput(result);
      calculation.innerHTML = `${input}K - 273.15 = ${result}°C`;
    }
    else if(unit2 === "fahrenheit"){
      var result = (((input-273.15)*9)/5)+32;
      setOutput(result);
      calculation.innerHTML = `${input}K x 9/5 - 459.67 = ${result}°F`;
    }
    else if(unit2 === "rankine"){
      var result = input*9/5;
      setOutput(result);
      calculation.innerHTML = `${input}K x 9/5  = ${result}°R`;
    }
    else if(unit2 === "kelvin"){
      alert("Please select a valid conversion.")
      reset();
    }
  }
  else if(unit1 === "rankine"){
    if(unit2 === "celsius"){
      var result = (input*5/9) - 273.15;
      setOutput(result);
    calculation.innerHTML = `${input}°R x 5/9 - 273.15 = ${result}°C`;
    }
    else if(unit2 === "fahrenheit"){
      var result = input - 459.67;
      setOutput(result);
      calculation.innerHTML = `${input}°R - 459.67 = ${result}°F`;
    }
    else if(unit2 === "kelvin"){
      var result = input * 5 / 9;
      setOutput(result);
      calculation.innerHTML = `${input}°R x 5/9 = ${result}K`;
    }
    else if(unit2 === "rankine"){
      alert("Please select a valid conversion");
      reset();
    }
  }
};

