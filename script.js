const toggle = document.getElementById('darkMode');
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})