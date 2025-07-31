// Smooth scrolling (unchanged)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark/Light Mode Toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or default to light
if (savedTheme === 'dark') {
  htmlEl.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
} else {
  htmlEl.removeAttribute('data-theme');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  const isDark = htmlEl.getAttribute('data-theme') === 'dark';
  if (isDark) {
    htmlEl.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    htmlEl.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});
