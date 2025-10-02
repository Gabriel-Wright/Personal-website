setBackgroundAnimationSpeed();

function setBackgroundAnimationSpeed() {
const body = document.querySelector('.standard-blog-body');
const height = body.scrollHeight; 
const duration = height/5; 

body.style.animationDuration = `${duration}s`;
}