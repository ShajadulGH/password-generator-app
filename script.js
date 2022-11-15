var passLenght = document.querySelector(".pass-length input");
var inputBox = document.querySelector(".input-box input");
var option = document.querySelectorAll(".option input");
var generateBtn = document.querySelector(".generate-btn");
var indicatorPass = document.querySelector(".pass-indicator");
var copyPass = document.querySelector(".input-box span");
const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~",
};
const generatePass = () => {
  let tempPass = "";
  let finalPass = "";
  let exDuplicate = false;
  let length = passLenght.value;
  exDuplicate.value = false;
  option.forEach((option) => {
    if (option.checked) {
      if (option.id === "duplicate") {
        exDuplicate = true;
      } else {
        tempPass += characters[option.id];
      }
    }
  });
  for (let i = 0; i < length; i++) {
    let removeDuplicate = tempPass[Math.floor(Math.random() * tempPass.length)];
    if (exDuplicate) {
      !finalPass.includes(removeDuplicate)
        ? (finalPass += removeDuplicate)
        : i--;
    } else {
      finalPass += removeDuplicate;
    }
  }
  inputBox.value = finalPass;
};
const updateIndicator = () => {
  indicatorPass.id =
    passLenght.value <= 8
      ? "weak"
      : passLenght.value <= 16
      ? "medium"
      : "strong";
};
const coppied = () => {
  navigator.clipboard.writeText(inputBox.value);
  copyPass.innerText = "check";
};
const updateLength = () => {
  document.querySelector(".pass-length span").innerText = passLenght.value;
  generatePass();
  updateIndicator();
};
updateLength();
passLenght.addEventListener("input", updateLength);
generateBtn.addEventListener("click", generatePass);
copyPass.addEventListener("click", coppied);
