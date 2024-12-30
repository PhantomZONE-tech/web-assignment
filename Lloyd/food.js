document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent!');
});

/* Smooth Scroll */
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Sticky Navigation */
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/* Change
