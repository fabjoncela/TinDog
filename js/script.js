// Function to apply the theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
}

// Load the saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

// Toggle the theme and save it to localStorage
document.getElementById('btnSwitch').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});
