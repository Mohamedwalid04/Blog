let button = document.querySelector(".btn-scroll");
button.addEventListener("click", () => {
    window.scrollTo(0, 0)
})


window.onscroll = () => {
    if (scrollY >= 185) {
        button.style.display = "block"
    } else {
        button.style.display = "none"
    }
}
