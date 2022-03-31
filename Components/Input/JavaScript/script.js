const usernameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");

function removeActiveClassFromBoth() {
  usernameEl.classList.remove("is-focused");
  passwordEl.classList.remove("is-focused");
}

window.addEventListener("click", (e) => {
  if (usernameEl === e.target || passwordEl === e.target) {
    e.target.classList.add("is-focused");
  }
  if (!usernameEl.value && usernameEl !== document.activeElement) {
    usernameEl.classList.remove("is-focused");
  }
  if (!passwordEl.value && passwordEl !== document.activeElement) {
    passwordEl.classList.remove("is-focused");
  }
});

function inputValidation(element, regEx, condition) {
  const conditionCheck =
    regEx.test(element.value) === condition && element.value.length >= 5;
  if (conditionCheck) {
    element.classList.remove("invalid-input");
    element.classList.add("valid-input");
  } else if (!conditionCheck) {
    element.classList.remove("valid-input");
    element.classList.add("invalid-input");
  }
  if (!element.value) {
    element.classList.remove("invalid-input");
    element.classList.remove("valid-input");
  }
  console.log(conditionCheck);
}

usernameEl.addEventListener("keyup", (e) =>
  inputValidation(e.target, /\d/, false)
);
passwordEl.addEventListener("keyup", (e) =>
  inputValidation(e.target, /\d/, true)
);
