function checkCharacter() {
  console.log("user pressed button");
  let name = document.getElementById("nameInput").value;
  let age = Number(document.getElementById("ageInput").value);
  let score = Number(document.getElementById("scoreInput").value);
  console.log("name is", name);
  console.log("age is", age);
  console.log("score is", score);

  let output = document.getElementById("characterOutput");
  if (name === "" || isNaN(age) || isNaN(score) || age === 0 || score === 0) {
    output.innerText = "type your name, age and score first!";
    return;
  }

  let result = "";

  if (age < 18) {
    result = "Too Young To play!!!!!";
  } else if (score > 80) {
    result = "Pro gamer";
  } else if (score > 50) {
    result = "Normal pleb";
  } else {
    result = "Beginner bozo";
  }

  document.getElementById("characterOutput").innerText = result;

  // 1. Ná í name, age og score
  // 2. Breyta age og score í Number
  // 3. Ef eitthvað vantar → sýna villu
  // 4. Nota if / else:
  // ef age < 18 skila þá "Of ung/ur til að spila"
  // ef score > 80 og age >= 18 "Pro"
  // ef score > 50 en < 80 "Normal"
  // annars skila "Beginner"
  // 5. Sýna niðurstöðu í output
}
