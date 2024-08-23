document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const menu = document.getElementById('menu');

    const toggleHamburgerIcon = () => {
        if (window.innerWidth <= 780) {
            hamburgerIcon.style.display = 'flex';
        } else {
            hamburgerIcon.style.display = 'none';
            menu.style.display = 'none'; 
        }
    };

    const toggleMenu = () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    };

    window.addEventListener('resize', toggleHamburgerIcon);
    hamburgerIcon.addEventListener('click', toggleMenu);

    toggleHamburgerIcon();
});