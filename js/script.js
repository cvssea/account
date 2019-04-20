const focus = document.querySelector(".focus");
const toggleIn = document.querySelector(".signin-toggle");
const toggleUp = document.querySelector(".signup-toggle");
const buttons = document.querySelectorAll(".btn-focus");
const forms = document.querySelectorAll(".form-container");

// Main event listener - applies to both toggle buttons
buttons.forEach(button => {
  button.addEventListener("click", action);
});

function action() {
  focusClasses();
  formClasses();
}

// Handle sliding focus area classes and togglers content
function focusClasses() {
  if (focus.classList.contains("slide-r")) {
    focus.classList.remove("slide-r");
    focus.classList.add("slide-l");
    toggleUp.classList.add("shift");
    toggleIn.classList.remove("shift");
  } else {
    focus.classList.add("slide-r");
    focus.classList.remove("slide-l");
    toggleIn.classList.add("shift");
    toggleUp.classList.remove("shift");
  }
}

// Handle show/hide forms classes
function formClasses() {
  forms.forEach(form => {
    // Fix disappearing .signin-form when switching hide/show classes
    if (form.classList.contains('signin-form')) {
      form.style.visibility = 'initial';
    }

    if (form.classList.contains("hide")) {
      form.classList.remove("hide");
      form.classList.add("show");
    } else {
      form.classList.remove("show");
      form.classList.add("hide");
    }
  });
}
