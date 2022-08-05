
var foodgrainsArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40127505_7-aashirvaad-shudh-chakki-atta.jpg",
        brand : "Aashirvad",
        name : "Shudh Chakki Atta - Rich In Protein & Dietary Fibre",
        Quantity : "10 Kg",
        price : "367",
        strikedOdprice : "426"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/30003360_7-dhara-oil-mustard-kachi-ghani.jpg",
        brand : "Dhara",
        name : "Oil - Mustard (Kachi Ghani)",
        Quantity : "1 L Pouch",
        price : "167",
        strikedOdprice : "195"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40019396_10-bb-popular-sugar.jpg",
        brand : "BB Popular",
        name : "Sugar/Chini",
        Quantity : "1 Kg",
        price : "45.60",
        strikedOdprice : "55"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000407_12-bb-royal-refined-sugar-sulphurless.jpg",
        brand : "BB Royal",
        name : "Refined Sugar (Sulphurless)/Chini",
        Quantity : "1 Kg",
        price : "52",
        strikedOdprice : "60"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40026603_9-bb-royal-cuminjeera-whole.jpg",
        brand : "BB Royal",
        name : "Cumin/Jeera - Whole",
        Quantity : "500 g pouch",
        price : "192",
        strikedOdprice : "300"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000428_17-bb-popular-toorarhar-dal.jpg",
        brand : "BB Popular",
        name : "Toor/Arhar Dal",
        Quantity : "1 Kg pouch",
        price : "123.50",
        strikedOdprice : "160"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40051744_5-fortune-fortune-premium-kachi-ghani-pure-mustard-oil.jpg",
        brand : "Fortune",
        name : "Fortune Premium Kachi Ghani Pure Mustard Oil",
        Quantity : "1 L pouch",
        price : "157",
        strikedOdprice : "195"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
        brand : "Tata Salt",
        name : "Iodized",
        Quantity : "1 kg Pouch",
        price : "22",
        strikedOdprice : "25"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40113566_1-shree-neelkamal-sattu.jpg",
        brand : "Shree Neelkamal",
        name : "Sattu",
        Quantity : "500 g",
        price : "74",
        strikedOdprice : "78"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40099239_9-bb-royal-chakki-fresh-wheat-atta-fortified.jpg",
        brand : "BB Royal",
        name : "Wheat Atta Chakki Fresh",
        Quantity : "10 Kg",
        price : "329",
        strikedOdprice : "425"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1220745_1-aashirvaad-shudh-chakki-atta-5-kg-iodised-salt-1-kg.jpg",
        brand : "Aashirvaad",
        name : "Shudh Chakki Atta 10 Kg + Iodised Salt 1 kg",
        Quantity : "Combo 2 Items",
        price : "381.40",
        strikedOdprice : "450"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1220744_1-aashirvaad-shudh-chakki-atta-10-kg-iodised-salt-1-kg.jpg",
        brand : "Aashirvaad",
        name : "Shudh Chakki Atta 5 kg + Iodised Salt 1 kg",
        Quantity : "Combo 2 Items",
        price : "212.40",
        strikedOdprice : "252"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1213921_1-bb-royal-maida.jpg",
        brand : "BB Royal",
        name : "Maida",
        Quantity : "2 Kg pouch",
        price : "78",
        strikedOdprice : "120"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/147491_9-saffola-gold-refined-cooking-oil-blended-rice-bran-sunflower-oil-helps-keeps-heart-healthy.jpg",
        brand : "Saffola",
        name : "Gold Refined Cooking oil | Sunflower oil",
        Quantity : "1 L pouch",
        price : "215",
        strikedOdprice : "250"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40059444_2-engine-kacchi-ghani-mustard-oil.jpg",
        brand : "Engine",
        name : "Kacchi Ghani Mustard Oil",
        Quantity : "1 L pouch",
        price : "190",
        strikedOdprice : "235"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000423_12-bb-royal-sooji-ordinarybombay-rava.jpg",
        brand : "BB Royal",
        name : "Sooji Ordinary/Bombay Rava",
        Quantity : "500 g pouch",
        price : "23",
        strikedOdprice : "30"

    },

]



document.querySelector("#title").innerText+=" ("+foodgrainsArr.length+")";


displayProducts(foodgrainsArr);

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
    
    var product = foodgrainsArr.filter(function(elem,i){
        return index==i;
    })
    cartArr.push(product[0]);
    localStorage.setItem("cart",JSON.stringify(cartArr))

}