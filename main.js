const $menuIcon = document.querySelector('.lnr-menu');
const $navList = document.querySelector('header > ul');
const $aboutIcon = document.querySelector('#about-icon');
const $aboutMenu = document.querySelector('.about-menu');

$menuIcon.addEventListener('click', () => {
    $navList.classList.toggle('hidden');
});

$aboutIcon.addEventListener('click', () => {
    $aboutMenu.classList.toggle('hidden');
})