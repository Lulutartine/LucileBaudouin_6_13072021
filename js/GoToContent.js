//goToContent btn @ index page
let header = document.querySelector(".header")

document.addEventListener("scroll", ()=> {
    if(window.scrollY >= header.scrollHeight){
        document.querySelector(".goToContent").style.display = "none"
    } else {
        document.querySelector(".goToContent").style.display = "block"
    }
})
