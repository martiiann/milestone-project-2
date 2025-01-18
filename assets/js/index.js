// Handle form submission
const form = document.getElementById('start-form');
const usernameInput = document.getElementById('username');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form's default behavior
    const username = usernameInput.value.trim();

    if (username) {
        // Store the username in localStorage (optional)
        localStorage.setItem('username', username);

        // Redirect to the quiz page
        window.location.href = 'quiz.html';
    } else {
        alert('Please enter your name to start the game.');
    }
});
