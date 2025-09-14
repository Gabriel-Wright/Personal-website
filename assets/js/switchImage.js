//wait for whole HTML to loaded before running this js
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        `${BASE_URL}/assets/images/memoriesOfMurder.jpg`,
        `${BASE_URL}/assets/images/dude-writing.jpg`,
        `${BASE_URL}/assets/images/gabrielFuji.jpg`
    ];

    const switchImage = document.getElementById("rotatingImage");
    let currentIndex = 0;
    let intervalId;

    function changeImage() {
        // Fade out first
        rotatingImage.classList.add('fade-out');

        setTimeout(() => {
            // Switch image after fade-out
            currentIndex = (currentIndex + 1) % images.length;
            rotatingImage.src = images[currentIndex];

            // Fade back in
            rotatingImage.classList.remove('fade-out');
        }, 500); // match this timeout to CSS transition duration    
    }

    function startSwitch() {
        intervalId = setInterval(changeImage, 5000); // Change image every 5 seconds
    }

    function stopSwitch() {
        clearInterval(intervalId);
    }

    switchImage.addEventListener("mouseover", stopSwitch);
    switchImage.addEventListener("mouseout", startSwitch);
    switchImage.addEventListener("click", changeImage);

    // Initialize
    switchImage.src = images[currentIndex];
    startSwitch();
});