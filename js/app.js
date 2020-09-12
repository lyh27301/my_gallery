baguetteBox.run('.gallery');

/* ========================================= */
/*              Dropdown Menu                */
/* ========================================= */
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementsByClassName('dropdown-content')[0];
menuIcon.addEventListener('click', (e) => {
    if(menu.style.display === '' || menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});