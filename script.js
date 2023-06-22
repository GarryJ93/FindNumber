// let actualTime = document.getElementById("heure");

// function showHour() {
//   let hour = new Date().toLocaleTimeString("fr");
//   actualTime.innerHTML = hour;
//   let second = new Date().getSeconds();
//     if (second % 3 == 0) {
//     actualTime.style = "font-weight: bold; color: red; font-size: 32px";
//   } else {
//     actualTime.style = "font-size: 32px";
//   }
// }
// setInterval(showHour, 1000);

// let answer = prompt("Veuillez saisir un nombre entre 0 et 100");
// let randomNum = Math.round(Math.random() * 100);
// let count = 1;

// function findTheNum() {

//   while (answer != randomNum) {
//     if (answer.value == "" || answer == [0-9]) {
//     alert("Merci de saisir un chiffre");
//   }

//   if (answer.value < randomNum) {
//     count++;
//     prompt("Le chiffre mystère est plus grand ! Réessaye");

//   }
//   else if (answer.value > randomNum) {
//     count++;
//     prompt("Le chiffre mystère est plus petit ! Réessaye");

//   }
//   else if (answer.value == randomNum)
//     count++;
//   prompt("Félicitations ! Vous avez trouvé le chiffre mystère en " + count + " coups");

// }
// }
// findTheNum();

let answer = document.getElementById("user-answer");
let submit = document.getElementById("validate");
let played = document.getElementById("played");
let message = document.getElementById("message");
let reset = document.getElementById("reset");
let mysteryNum = Math.round(Math.random() * 100);
let count = 1;
const canvas = document.querySelector("#confetti-canvas");
submit.addEventListener("click", function () {
  if (answer.value == mysteryNum) {
    message.innerHTML =
      "Félicitations vous avez trouvé en " + count + " coups.";
    played.innerHTML = answer.value + " était la bonne réponse.";
    reset.style = "visibility: visible;";
    let myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });
    myConfetti({
      particleCount: 100,
      spread: 160,
    });
  }
  while (answer.value != mysteryNum) {
    if (answer.value < mysteryNum) {
      message.innerHTML = "Le nombre mystère est plus grand !";
      count++;
      if (count > 2) {
        played.innerHTML += ", " + answer.value;
      }
      else {
        played.innerHTML += "Proposés: " + answer.value;
      }
    } else if (answer.value > mysteryNum) {
      message.innerHTML = "Le nombre mystère est plus petit !";
      count++;
       if (count > 2) {
        played.innerHTML += ", " + answer.value;
      }
      else {
        played.innerHTML += "Proposés: " + answer.value;
      }
    }

    return true;
  }
});
reset.addEventListener("click", function () {
  count = 1;
  message.innerHTML = "";
  played.innerHTML = "";
  mysteryNum = Math.round(Math.random() * 100);
  reset.style = "visibility: hidden;";
});
