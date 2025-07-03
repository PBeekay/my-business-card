// Theme toggle logic
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark');
        toggleBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        toggleBtn.textContent = '🌙';
    }
}

// Load theme from localStorage
const userPref = localStorage.getItem('theme');
const systemPrefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialDark = userPref === 'dark' || (!userPref && systemPrefDark);
setTheme(initialDark);

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark');
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}); 