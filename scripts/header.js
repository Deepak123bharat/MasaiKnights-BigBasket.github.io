document.querySelector("#navbar_login").addEventListener("click",()=>{
    showLoginTab()
})

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
    if(window.scrollY > 100)
    {
        document.getElementById("navbar_top").style.visibility = "hidden";
        document.getElementById("navbar_bottom").style.display = "none";
        var logo = document.getElementById("logoImg")
        logo.src = "../icons/navbar/bbLogoSmall.png"
        logo.style.height = "50px"
        logo.style.margin = "0"
        logo.style.padding = "0"
        document.getElementById("navbar_middle").style.marginTop="-30px"
    }
    if(window.scrollY < 50)
    {
        document.getElementById("navbar_top").style.visibility = "visible";
        document.getElementById("navbar_bottom").style.display = "flex";
        var logo = document.getElementById("logoImg")
        logo.src = "../images/logos/logo.png"
        logo.style.height = "100px"
        logo.style.marginBottom = "0px"
        document.getElementById("navbar_middle").style.marginTop="0px"

    }
})
var height = document.getElementById("navbar").offsetHeight
document.getElementById("nav_space").style.height="140px"