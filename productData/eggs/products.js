// eggs
var dairyArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40072320_2-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
        brand:"Fresho",
        name : "Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free",
        Quantity : "12 pcs",
        price : " 79.40",
        strikedOdprice : " 110.60"

    },
    {
        
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1203477_2-fresho-eggs-regular.jpg",
        brand:"Fresho",
        name : "Eggs - Regular",
        Quantity : "2X6 pcs",
        price : " 72.90",
        strikedOdprice : " 80.00"

    },
    
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
        brand:"Fresho",
        name : "Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs",
        Quantity : "250 g",
        price : " 190",
        strikedOdprice : " 226"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1213737_1-bb-combo-fresho-farm-eggs-medium-30-pcs-kara-coconut-milk-uht-classic-imported-200-ml.jpg",
        brand:"Fresho",
        name : "Fresho Farm Eggs Medium 30 pcs + Kara Coconut Milk UHT Classic, Imported 200 ml",
        Quantity : "2 item",
        price : " 254",
        strikedOdprice : " 285"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000900_10-fresho-chicken-breast-boneless-antibiotic-residue-free-4-5-pcs.jpg",
        brand:"bb Combo",
        name : "Chicken Breast - Boneless, Antibiotic Residue-Free, 2- 4 pcs",
        Quantity : "500 g",
        price : " 259",
        strikedOdprice : " 360"

    },
    {
        
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
        brand:"Fresho",
        name : "Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g",
        Quantity : " 2 item",
        price : "448",
        strikedOdprice : " 500"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1220958_1-fresho-chicken-1-kg-bb-royal-biryani-basmati-rice-extra-long-1-kg-pouch.jpg",
        brand:"Fresho", 
        name : "Chicken 1 kg + BB Royal Biryani Basmati Rice - Extra Long 1 kg Pouch",
        Quantity : "2 items",
        price : "435",
        strikedOdprice : " 605"

    },
]


document.querySelector("#title").innerText+=" ("+dairyArr.length+")";


displayProducts(dairyArr);

function displayProducts(data){
    data.map(function(elem,index){
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div2.innerText="GET 20% OFF";
        
        var div3 = document.createElement("div");
        div3.setAttribute("class","image-div");
        var image = document.createElement("img");
        image.setAttribute("src",elem.image_adress);
        div3.append(image);
        var div4 = document.createElement("div");
        var brand = document.createElement("h6");
        brand.innerText=elem.brand;
        var a1 = document.createElement("a");
        a1.innerText=elem.name;
        div4.append(brand,a1);
        var div5 = document.createElement("div");
        var size = document.createElement("h5");
        size.innerText=elem.Quantity;
        var span2 = document.createElement("span");
        var price = document.createElement("span");
        price.innerText="Rs "+elem.price; 
        price.style.fontWeight="bold"
        var strikedPrice = document.createElement("span");
        strikedPrice.innerText="Rs "+elem.strikedOdprice;
        strikedPrice.style.textDecoration="line-through"
        strikedPrice.style.fontSize="11px"
        span2.append(strikedPrice,price);
        var deleveryType = document.createElement("p");
        deleveryType.innerHTML='<i class="fa-solid fa-truck"></i> Standard Delevery Tomorrow Morning';
        var span4 = document.createElement("span");
        var span5= document.createElement("span");
        span5.innerText="Qty : ";
        var quantity = document.createElement("input");
        quantity.setAttribute("type","number");
        quantity.style.width="60px"
        var button = document.createElement("button");
       
       
        button.innerHTML='<i class="fa-solid fa-cart-plus"></i>';
        button.addEventListener("click",function(){
            addToCart(index);
        })
        span4.append(span5,quantity,button);
       
        div5.style.padding="5px"
        div4.style.padding="5px"
        
        div4.style.fontWeight="bold"
        
        div5.append(size,span2,deleveryType,span4);
        div1.append(div2,div3,div4,div5)
        document.querySelector(".products-cards").append(div1);

    })
}

function sortPriceLowtoHigh(data){
    Arrays.sort(data)

}


var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(index){
    
    var product = dairyArr.filter(function(elem,i){
        return index==i;
    })
    cartArr.push(product[0]);
    localStorage.setItem("cart",JSON.stringify(cartArr))

}