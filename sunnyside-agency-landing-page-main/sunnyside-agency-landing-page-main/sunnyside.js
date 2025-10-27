let hamburger = document.getElementById("hambuger");
let navlink = document.getElementById("navlink");

hamburger.addEventListener('click', () => {
    navlink.classList.toggle('show');
});