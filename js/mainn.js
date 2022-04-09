let counter = 0;
const back = document.querySelector('#back')
const next = document.querySelector('#next')
const sliderContainer = document.querySelector('#slider-container')
const slider = document.querySelector('#slider')
const max = document.querySelectorAll('.slide').length - 1;


function sliderFunc() {
    if (counter < max) {
        counter++;
        slider.style.left = '-' + 1905 * counter + 'px';
    } else {
        counter = 0;
        slider.style.left = '-' + 1905 * counter + 'px';
    }
}

next.addEventListener('click', sliderFunc);

back.addEventListener('click', () => {
    if (counter >= 0) {
        counter--;
        slider.style.left = '-' + 1700 * counter + 'px';
    }
});


const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }

    } else {
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}