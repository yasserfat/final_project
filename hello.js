const menuBtn = document.getElementsByClassName("menu-button")
const menuLinks = document.getElementsByClassName("menu-links")
const menuLis = document.querySelectorAll(".menu-links li a")

menuBtn[0].addEventListener("click", () => {
    menuLinks[0].classList.toggle("active")
    menuLis.forEach(item=>item.classList.toggle("active") )
})
