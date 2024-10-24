const submitButton = document.querySelector("#submitBtn");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const userNameElement = document.querySelector("#userName").value;
  const emailElement = document.querySelector("#email").value;
  const messageElement = document.querySelector("#message").value;
  const nameErrElement = document.querySelector("#nameErr");
  const emailErrElement = document.querySelector("#emailErr");
  const msgErrElement = document.querySelector("#msgErr");
  const alertBoxElement = document.querySelector("#alertBox");
  const submitBoxElement = document.querySelector("#submitBox");
  const closeBoxElement = document.querySelectorAll("#closeBtn");

  function validateName() {
    if (userNameElement.length == 0) {
      nameErrElement.style.display = "inline";
      return false;
    }
    nameErrElement.style.display = "none";
    return true;
  }
  validateName();
  function validateEmail() {
    const emailPattern = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    if (!emailPattern.test(emailElement)) {
      emailErrElement.style.display = "inline";
      return false;
    }
    emailErrElement.style.display = "none";
    return true;
  }
  validateEmail();
  function validateMsg() {
    let requiredChr = 25;
    if (messageElement.length < requiredChr) {
      msgErrElement.style.display = "inline";
      return false;
    }
    msgErrElement.style.display = "none";
    return true;
  }
  validateMsg();

  if (validateName() && validateEmail() && validateMsg()) {
    submitBoxElement.setAttribute("data-name", "show");
    document.querySelector("#userName").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  } else {
    alertBoxElement.setAttribute("data-name", "show");
  }

  closeBoxElement.forEach((btn) => {
    btn.addEventListener("click", function () {
      submitBoxElement.removeAttribute("data-name", "show");
      alertBoxElement.removeAttribute("data-name", "show");
    });
  });
});
