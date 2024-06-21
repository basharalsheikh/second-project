window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var body = document.body;
    if (window.scrollY > header.offsetHeight) {
        body.classList.add('fixed-header-padding');
    } else {
        body.classList.remove('fixed-header-padding');
    }
});