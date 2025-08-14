document.addEventListener('scroll', changeHeaderStyle);

function changeHeaderStyle() {
    //Could throttle this function for performance,
    //but OK for now
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}