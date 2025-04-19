// Cache DOM elements for efficiency
const usernameForm = document.getElementById('username-form');
const usernameInput = document.getElementById('username');
const welcomeMessage = document.getElementById('welcome-message');
const userNameSpan = document.getElementById('user-name');

// Handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent page reload

  const username = usernameInput.value;
  if (username) {
    // Hide the form and show the personalized message
    usernameForm.style.display = 'none';
    welcomeMessage.style.display = 'block';
    userNameSpan.textContent = username;
  } else {
    alert('Please enter a valid username!');
  }
}

// Add event listener to form submission
usernameForm.addEventListener('submit', handleFormSubmission);
