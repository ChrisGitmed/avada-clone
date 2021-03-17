const $menuIcon = document.querySelector('.lnr-menu');
const $navList = document.querySelector('header > ul');
const $aboutIcon = document.querySelector('#about-icon');
const $aboutMenu = document.querySelector('.about-menu');
const $investorsIcon = document.querySelector('#investors-icon');
const $investorsMenu = document.querySelector('.investors-menu');

$menuIcon.addEventListener('click', () => {
    $navList.classList.toggle('active')
});

$aboutIcon.addEventListener('click', () => {
    $aboutMenu.classList.toggle('active');
})

$investorsIcon.addEventListener('click', () => {
    $investorsMenu.classList.toggle('active');
})
