// This event listener ensures that the code inside runs only after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Selecting the hamburger menu button and navigation links
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".links");

  // Adding a click event listener to the hamburger menu button
  hamburgerMenu.addEventListener("click", function () {
    // Toggling the 'active' class on the navigation links to show/hide them
    navLinks.classList.toggle("active");
  });
});

// Selecting necessary elements for the modal functionality
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modalOverlay = document.querySelector(".modal");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal");

// Adding event listeners to the hamburger menu and modal overlay for opening the modal
hamburgerMenu.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modal.style.display = "block";
});

// Function to hide the modal
function hideModal() {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
}

// Adding event listener to the modal overlay for closing the modal
modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    hideModal();
  }
});
// Adding event listener to the close modal button for closing the modal
closeModalButton.addEventListener("click", hideModal);

// Adding event listener to close the modal when the 'Escape' key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});

// Function to handle scrolling and displaying the 'go to top' button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopButton").style.display = "block";
  } else {
    document.getElementById("goToTopButton").style.display = "none";
  }
}

// Adding event listener to the window object for scrolling
window.onscroll = function () {
  scrollFunction();
};

// Function to scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Get a reference to the email input field
const emailInput = document.getElementById("newsletter-input");
// Add event listener for the 'keydown' event on the email input field
emailInput.addEventListener("keydown", (event) => {
  // Check if the Enter key is pressed
  if (event.key === "Enter") {
    // Get the value entered into the email input field
    const email = emailInput.value;
    // Send data to the server or perform other actions as needed
    console.log("Email submitted:", email);
    // Clear the email input field
    emailInput.value = "";
  }
});
