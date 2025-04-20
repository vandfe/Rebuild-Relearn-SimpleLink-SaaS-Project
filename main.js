// Cache DOM elements
const usernameForm = document.getElementById('username-form');
const usernameInput = document.getElementById('username');
const welcomeMessage = document.getElementById('welcome-message');
const userNameSpan = document.getElementById('user-name');
const resetButton = document.getElementById('reset-button');

// Utility function: show welcome message
function showWelcome(username) {
  usernameForm.style.display = 'none';
  welcomeMessage.style.display = 'block';
  userNameSpan.textContent = username;
}

// Check if a username exists in localStorage
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
  showWelcome(savedUsername);
}

// Handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  const username = usernameInput.value;
  if (username) {
    localStorage.setItem('username', username); // Save to localStorage
    showWelcome(username);
  } else {
    alert('Please enter a valid username!');
  }
}

// Event listener
usernameForm.addEventListener('submit', handleFormSubmission);
resetButton.addEventListener('click', function () {
  localStorage.removeItem('username');
  location.reload(); // Reload page to reset state
});
