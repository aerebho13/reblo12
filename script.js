let toggleButton= document.getElementsByClassName('toggle-button')[0];
let navbarlinks= document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',() => {
    navbarlinks.classList.toggle('active')
});