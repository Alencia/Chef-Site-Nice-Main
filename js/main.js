let button = document.querySelector("button");
let menu = document.querySelector("section");
let closeBtn = document.querySelector("i");


button.addEventListener("click", function() {
    menu.style.right = 0;
});

closeBtn.addEventListener("click", function() {
    menu.style.right = "-16%";
});

