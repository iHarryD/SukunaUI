const allInputs = document.querySelectorAll(
  ".component-section.--input .input"
);

function inputAnimation(element) {
  window.addEventListener("click", (e) => {
    if (element === document.activeElement) {
      e.target.parentElement.classList.add("is-focused");
    } else {
      if (element.value) return;
      element.parentElement.classList.remove("is-focused");
    }
  });
}

allInputs.forEach((input) => inputAnimation(input));
