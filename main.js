const $menuIcon = document.querySelector('.lnr-menu');
const $navList = document.querySelector('header > ul');

$menuIcon.addEventListener('click', () => {
    $navList.classList.toggle('hidden');
});
