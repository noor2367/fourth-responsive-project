const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const close_btn = document.querySelector(".close-btn")

hamburger.addEventListener("click", function(){
    menu.classList.add("active")
}
);
close_btn.addEventListener("click", function(){
    menu.classList.remove("active")
})
