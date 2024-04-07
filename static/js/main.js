const toggleThemeButton = document.getElementById('toggle-theme');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
let theme = localStorage.getItem('theme');
if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('hidden')
    sunIcon.classList.remove('hidden')
} else {
    document.documentElement.classList.remove('dark');
    moonIcon.classList.remove('hidden')
    sunIcon.classList.add('hidden')
}
console.log(sunIcon)
toggleThemeButton.addEventListener('click', function () {

    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.add('hidden')
        moonIcon.classList.remove('hidden')
        localStorage.removeItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        sunIcon.classList.remove('hidden')
        moonIcon.classList.add('hidden')
        localStorage.setItem('theme', 'dark');
    }
})

