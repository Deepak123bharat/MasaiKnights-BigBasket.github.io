document.querySelector("#navbar_login").addEventListener("click",()=>{
    showLoginTab()
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100)
    {
        document.getElementById("navbar_top").style.visibility = "hidden";
        document.getElementById("navbar_bottom").style.display = "none";
        var logo = document.getElementById("logoImg")
        logo.src = "../icons/navbar/bbLogoSmall.png"
        logo.style.height = "50px"
        logo.style.margin = "0"
        logo.style.padding = "0"
        document.getElementById("navbar").style.boxShadow= "rgba(60, 64, 67, 0.5) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        var img = document.getElementById("imgShopId")
        if(img==null)
        {
            var imgDiv = document.getElementById("imgAndshop")
            var shopDiv = document.createElement("div")
            imgDiv.style.display = "flex"
            shopDiv.id = "imgShopId"
            shopDiv.style.display = "flex"
            shopDiv.style.alignItems = "center"
            // shopDiv.addEventListener("mouseover", ()=>{
            //     console.log("Mouse over")
            //     document.getElementById("category-hover-div").style.visibility = "visible"
            // })
            // shopDiv.addEventListener("mouseleave", ()=>{
            //     console.log("Mouse leave")
            //     document.getElementById("category-hover-div").style.visibility = "visible"
            // })
            var text = document.createElement("p")
            text.id = "shopText"
            text.innerHTML = "SHOP <i class=\"fa-solid fa-chevron-down\"></i>"
            shopDiv.append(text)
            imgDiv.append(shopDiv)
        }
        
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
        document.getElementById("navbar").style.boxShadow= ""
        var img = document.getElementById("imgShopId")
        if(img!=null)
            img.remove()

    }
})
var height = document.getElementById("navbar").offsetHeight
document.getElementById("nav_space").style.height="140px"

document.getElementById("cart").addEventListener("click", ()=>{
    window.location.href="../cart.html"
})


// add shop with logo when scrolling in y direction

//Shop by category arr 
var arr = ["Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Organic Fruits & Vegetables", "Cuts & Sprouts","Exotic Fruits & Veggies", "Flower Bouquets, Bunches" ]

var items = shuffle(arr)
var div = document.querySelector(".category-hover-div")
var div1 = document.querySelectorAll(".category-hover-div-1-options")

Array.from(div1).forEach(element => {
    element.addEventListener("mouseover", ()=>{
        var div2 = document.querySelector(".category-hover-div-2")
        div2.innerHTML = ""
        arr = shuffle(arr)
        arr.forEach(element => {
            var it = document.createElement("div")
            it.className = "category-hover-div-2-options"
            it.innerText = element
            div2.append(it)
        });

        var div3 = document.querySelector(".category-hover-div-3")
        div3.innerHTML = ""
        arr = shuffle(arr)
        arr.forEach(element => {
            var it = document.createElement("div")
            it.className = "category-hover-div-3-options"
            it.innerText = element
            div3.append(it)
        });

        var div4 = document.querySelector(".category-hover-div-4")
        div4.innerHTML = ""
        arr = shuffle(arr)
        arr.forEach(element => {
            var it = document.createElement("div")
            it.className = "category-hover-div-4-options"
            it.innerText = element
            div4.append(it)
        });
    
    })
})

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}