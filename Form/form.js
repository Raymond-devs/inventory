let form = document.getElementById("contactForm");
let fields = ["name", "email", "phone"];

form.addEventListener("submit", function (event) {
  let formIsValid = true;

  fields.forEach(function (fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "-error");

    if (input.value.trim() === "") {
      input.classList.add("error");
      error.style.display = "block";
      input.style.borderColor = "red";
      formIsValid = false;
    } else {
      input.classList.remove("error");
      error.style.display = "none";
      input.style.borderColor = "grey";
    }
  });

  if (!formIsValid) {
    event.preventDefault(); // Stop form from submitting
  }
});
