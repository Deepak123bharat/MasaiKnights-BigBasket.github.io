
var BeautyArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40162215_2-cinthol-deodorant-complexion-soap-original-provides-germ-protection.jpg",
        brand : "Cinthol",
        name : "Original Deodorant & Complexion Soap",
        Quantity : "50g pouch",
        price : "90",
        strikedOdprice : "95"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/253539_10-dettol-antiseptic-disinfectant-liquid.jpg",
        brand : "Dettol",
        name : "Antiseptic Disinfectant Liquid",
        Quantity : "250g-pouch",
        price : "201",
        strikedOdprice : "220"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/100003949_1-mysore-sandal-bathing-soap.jpg",
        brand : "Mysore Sandal",
        name : "Pure Sandalwood Oil Soap",
        Quantity : "100g -pouch",
        price : "75.50",
        strikedOdprice : "85"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40158282_10-dove-cream-beauty-bathing-bar.jpg",
        brand : "Dove",
        name : "Cream Beauty Bathing Bar - For Soft, Smooth Skin With Moisturising Cream, pH",
        Quantity : "200 g Pouch",
        price : "209",
        strikedOdprice : "209"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/248215_3-parachute-pure-coconut-oil.jpg",
        brand : "Parachute",
        name : "Pure Coconut Oil",
        Quantity : "200g-pouch",
        price : "285.00",
        strikedOdprice : "285"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40181143_1-pears-pure-gentle-bathing-bar.jpg",
        brand : "Pears",
        name : "Pure & Gentle Bathing Bar",
        Quantity : "500g-pouch",
        price : "300",
        strikedOdprice : "300"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1212657_3-colgate-strong-teeth-anticavity-toothpaste-with-amino-shakti-saver-pack.jpg",
        brand : "Colgate",
        name : "Strong Teeth Anticavity Toothpaste With Amino Shakti - Saver Pack",
        Quantity : "200ml X 24(Multipack)",
        price : "806.40",
        strikedOdprice : "1200"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/306148_1-hamam-soap-bar.jpg",
        brand : "Hamam",
        name : "Neem, Tulsi & Aloe Vera Soap, 100% Pure Neem Oil",
        Quantity : "15g",
        price : "5",
        strikedOdprice : "7"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/318865_18-sensodyne-fresh-gel-sensitive-toothpaste.jpg",
        brand : "Sensodyne",
        name : "Toothpaste - Fresh Gel, Sensitive For Daily Sensitivity Protection",
        Quantity : "750g-pouch",
        price : "329.73",
        strikedOdprice : "400"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/100968_5-mysore-sandal-bathing-soap-superior-with-pure-sandalwood-oil.jpg",
        brand : "Mysore Sandal",
        name : "Superior Sandalwood Oil Soap",
        Quantity : "1 kg Carton",
        price : "530",
        strikedOdprice : "600"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20005346_17-sensodyne-fresh-mint-sensitive-toothpaste.jpg",
        brand : "Sensodyne",
        name : "Toothpaste - Fresh Mint, Sensitive For Daily Sensitivity Protection",
        Quantity : "15.3g-pouch",
        price : "5",
        strikedOdprice : "7"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1214523_1-dabur-red-indias-no1-ayurvedic-fluroide-free-paste-pack-of-2.jpg",
        brand : "Dabur Red",
        name : "ndia's No.1 Ayurvedic Fluroide Free Paste (Pack of 2)",
        Quantity : "500 g pouch",
        price : "162",
        strikedOdprice : "200"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1202461_4-dettol-handwash-skin-care.jpg",
        brand : "Dettol",
        name : "Handwash - Skin Care",
        Quantity : "3500g-pouch",
        price : "342",
        strikedOdprice : "400"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195476_6-whisper-ultra-clean-sanitary-pads-xl-plus-locks-wetness-odour.jpg",
        brand : "Whisper",
        name : "Ultra Clean Sanitary Pads - XL Plus, Locks Wetness & Odour",
        Quantity : "1 kg",
        price : "540",
        strikedOdprice : "600"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1202458_5-dettol-handwash-original.jpg",
        brand : "Dettol",
        name : "Handwash - Original",
        Quantity : "5 L can",
        price : "70",
        strikedOdprice : "70"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20005343_3-sensodyne-repair-protect-sensitive-toothpaste.jpg",
        brand : "Sensodyne",
        name : "Toothpaste - Repair & Protect, For Deep Repair Of Sensitive Teeth",
        Quantity : "1kg ",
        price : "427",
        strikedOdprice : "427"

    },
]
document.querySelector("#title").innerText+=" ("+BeautyArr.length+")";


displayProducts(BeautyArr);

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