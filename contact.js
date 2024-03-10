document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission action
    window.location.href = "/thankyou.html"; // Redirects to the "Thank You" page
  });
