function sayHello() {
  console.log("user pressed button");
  let name = document.getElementById("NameInput").value;
  console.log("name is", name);
  if (name === "") {
    document.getElementById("nameOutput").innerText = "type you're name first!";
    return;
  }

  document.getElementById("nameOutput").innerText = `hello ${name}`;
}

function checkAge() {
  let age = Number(document.getElementById("ageInput").value);
  console.log("age is", age);
  console.log(isNaN(age));
  if (isNaN(age) || age === 0) {
    document.getElementById("ageOutput").innerText = "input Age Here";
    return;
  }
}

let message = ";";
if (age > 18) {
  message = "you are an adult";
} else message = "you are Child";
console.log(message);

document.getElementById(ageOutput).innerText = message;

function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  console.log("num1 is", num1);
  console.log("num2 is", num2);
  console.log("operator is", operator);
  if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
    let result;
    if (operator === "+") {
      result = num1 + num2;
      console.log("result is", result);
    }
  } else result = "result is" + (num1 + num2);
  console.log(result);
  document.getElementById("calcOutput").innerText = result;
}
