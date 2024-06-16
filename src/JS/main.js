const toggleTheme = document.getElementById('icon-theme')

const rootHtml = document.documentElement


window.onload = () => {
    const dataTheme = localStorage.getItem('data-theme');
    if (dataTheme) {
        rootHtml.setAttribute('data-theme', dataTheme);
    }

    const iconTheme = localStorage.getItem('icon-theme');
    if (iconTheme) {
        toggleTheme.classList.remove('bi-sun', 'bi-moon-stars')
        toggleTheme.classList.add(iconTheme);
    }
}

function changeToggle(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'dark'){
        rootHtml.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');

        toggleTheme.classList.remove('bi-sun');
        toggleTheme.classList.add('bi-moon-stars');
        localStorage.setItem('icon-theme', 'bi-moon-stars');

    }else {
        rootHtml.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');

        toggleTheme.classList.remove('bi-moon-stars');
        toggleTheme.classList.add('bi-sun');
        localStorage.setItem('icon-theme', 'bi-sun');
    }

}

toggleTheme.addEventListener('click', changeToggle);