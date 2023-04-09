const inputEmail = document.querySelector(".input-email");
const btnSubmit = document.querySelector(".btn-submit");
const outputMsg = document.querySelector(".error-output");
const iconError = document.querySelector(".error-icon");

const darkModeToggle = document.getElementById("dark-mode-checkbox");
const root = document.documentElement;

const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|mil|edu|biz|gov|info|name|museum|[a-zA-Z]{2})$/;

  return emailRegex.test(email);
};

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let message = "";
  const userEmail = inputEmail.value;

  if (userEmail === "") {
    message = "Please input your email.";
    outputDesign("error");
  } else if (validateEmail(userEmail)) {
    message = "Thank you for subscribing!";
    outputDesign("success");
    inputEmail.value = "";
  } else {
    message = "Please provide a valid email.";
    outputDesign("error");
  }
  return (outputMsg.textContent = message);
});

const outputDesign = function (status) {
  if (status === "error") {
    console.log("error");
    iconError.style.display = "block";
    outputMsg.style.color = "var(--soft-red)";
    inputEmail.style.borderWidth = "2px";
    inputEmail.style.borderColor = "var(--soft-red)";
  } else if (status === "success") {
    inputEmail.style.borderColor = "var(--desaturated-red)";
    iconError.style.display = "none";
    outputMsg.style.color = "var(--success)";
    inputEmail.style.borderWidth = "1px";
  }
};

darkModeToggle.addEventListener("change", function () {
  root.classList.toggle("dark-mode");
});
