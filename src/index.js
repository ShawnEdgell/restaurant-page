document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        navigation.classList.toggle('hidden');
    });
});