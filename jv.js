const humburger = document.getElementById("humburger")
const navlist = document.getElementById("navlist")

humburger.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist-active")
})