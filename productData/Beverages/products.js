
var beveragesArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20005895_6-nescafe-sunrise-instant-coffee-chicory-mixture.jpg",
        brand : "Nescafe",
        name : "Sunrise Instant Coffee - Chicory Mixture",
        Quantity : "50g pouch",
        price : "90",
        strikedOdprice : "95"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/266551_8-taj-mahal-tea.jpg",
        brand : "Taj Mahal",
        name : "Tea",
        Quantity : "250g-pouch",
        price : "201",
        strikedOdprice : "220"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/266591_7-3-roses-tea-dust.jpg",
        brand : "3Roses",
        name : "Dust Tea",
        Quantity : "100g -pouch",
        price : "75.50",
        strikedOdprice : "85"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/281594_6-3-roses-natural-care-tea.jpg",
        brand : "3Roses",
        name : "Natural Care Tea",
        Quantity : "200 g Pouch",
        price : "209",
        strikedOdprice : "209"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/266579_24-bru-instant-coffee.jpg",
        brand : "BRU",
        name : "Instant Coffee",
        Quantity : "200g-pouch",
        price : "285.00",
        strikedOdprice : "285"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/186070_8-cothas-coffee-.jpg",
        brand : "Cothas Coffee",
        name : "Coffee-Regular",
        Quantity : "500g-pouch",
        price : "300",
        strikedOdprice : "300"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1214886_8-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
        brand : "Fresho",
        name : "Tender Coconut Water-No Added sugar Flavours ",
        Quantity : "200ml X 24(Multipack)",
        price : "806.40",
        strikedOdprice : "1200"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20006249_4-boost-drink-powder-sports-stars-first-choice.jpg",
        brand : "Boost",
        name : "Drink Powder - Sports Stars First Choice",
        Quantity : "15g",
        price : "5",
        strikedOdprice : "7"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40071513_8-horlicks-health-nutrition-drink-classic-malt.jpg",
        brand : "Horlicks",
        name : "Health & Nutrition Drink",
        Quantity : "750g-pouch",
        price : "329.73",
        strikedOdprice : "400"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/102871_11-red-label-tea.jpg",
        brand : "Red Label",
        name : "Tea",
        Quantity : "1 kg Carton",
        price : "530",
        strikedOdprice : "600"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40122309_6-tang-instant-drink-mix-lemon.jpg",
        brand : "Tang",
        name : "Instant Drink Mix - Lemon",
        Quantity : "15.3g-pouch",
        price : "5",
        strikedOdprice : "7"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/262799_24-bru-filter-coffee-green-label.jpg",
        brand : "BRU",
        name : "Filter Coffee - Green Label",
        Quantity : "500 g pouch",
        price : "162",
        strikedOdprice : "200"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/297576_11-tata-tea-chakra-gold-dust-tea.jpg",
        brand : "Tata Tea Chakra",
        name : "Gold Strong Tea With Long Lasting Taste - Black Tea",
        Quantity : "3500g-pouch",
        price : "342",
        strikedOdprice : "400"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/226491_10-red-label-tea-natural-care.jpg",
        brand : "Red Label",
        name : "Tea - Natural Care",
        Quantity : "1 kg",
        price : "540",
        strikedOdprice : "600"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/174367_2-bisleri-mineral-water.jpg",
        brand : "Bisleri",
        name : "Mineral Water",
        Quantity : "5 L can",
        price : "70",
        strikedOdprice : "70"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/240065_14-tata-tea-gold-tea.jpg",
        brand : "Tata Tea Gold",
        name : "Assam Teas With Gently Rolled Aromatic Long Leaves, Rich & Aromatic Chai, Black Tea",
        Quantity : "1kg ",
        price : "427",
        strikedOdprice : "427"

    },
]
document.querySelector("#title").innerText+=" ("+beveragesArr.length+")";


displayProducts(beveragesArr);

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