const focus = document.querySelector(".focus");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", slide.bind(focus));
});

function slide() {
  if (this.classList.contains("slide-r")) {
    this.classList.remove("slide-r");
    this.classList.add("slide-l");
  } else {
    this.classList.add("slide-r");
    this.classList.remove("slide-l");
  }
}
