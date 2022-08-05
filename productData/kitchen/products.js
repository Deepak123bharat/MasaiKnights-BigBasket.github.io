// kithen

var dairyArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/30005108_18-pedigree-dry-dog-food-chicken-vegetables-for-adult-dogs.jpg",
        name : "Dry Pet Food - For Adult Dogs, Chicken & Vegetables",
        brand: "Eveready",
        Quantity : "15 kg",
        price : "Rs 2686.40",
        strikedOdprice : "Rs 3150.60"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40081006_10-harpic-disinfectant-bathroom-cleaner-liquid-lemon.jpg",
        brand: "Eveready",
        name : "Disinfectant Bathroom Cleaner Liquid, Lemon",
        Quantity : "1 L",
        price : "Rs 172.90",
        strikedOdprice : "Rs 180.00"

    },
    
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/266945_21-surf-excel-easy-wash-detergent-powder.jpg",
        brand: "Eveready",
        name : "Easy Wash Detergent Powder",
        Quantity : "1.5 Kg",
        price : "Rs 199",
        strikedOdprice : "Rs 226"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40200751_1-vim-dishwash-liquid-gel-lemon-refill-pouch.jpg",
        brand: "Eveready",
        name : "Dishwash Liquid Gel Lemon Refill Pouch",
        Quantity : "2 L",
        price : "Rs 355",
        strikedOdprice : "Rs 445"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40129070_8-lizol-disinfectant-surface-floor-cleaner-liquid-citrus-kills-999-germs.jpg",
        brand: "Duracell",
        name : "Disinfectant Surface & Floor Cleaner Liquid - Citrus",
        Quantity : "5 L",
        price : "Rs 781.08",
        strikedOdprice : "Rs 840"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40038652_2-vim-dishwash-bar-lemon.jpg",
        brand: "Duracell",
        name : "Dishwash Bar - Lemon",
        Quantity : "60 G",
        price : "Rs 5",
        strikedOdprice : "Rs 5.50"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1208975_4-harpic-harpic-bathroom-cleaner-lemon-1-l-harpic-toilet-cleaner-original-1-l.jpg",
        brand: "Duracell",
        name : "Bathroom Cleaner Lemon 1 L + Toilet Cleaner, Original 1 L",
        Quantity : "1 L + 1 L",
        price : "Rs 362.05",
        strikedOdprice : "Rs 394.05"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/230745_18-comfort-after-wash-morning-fresh-fabric-conditioner.jpg",
        brand: "Duracell",
        name : "After Wash Morning Fresh Fabric Conditioner",
        Quantity : "860ml",
        price : "Rs 205",
        strikedOdprice : "Rs 225"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40130608_7-comfort-after-wash-morning-fresh-fabric-conditioner.jpg",
        brand: "Duracell",
        name : "After Wash Fabric Conditioner - Morning Fresh",
        Quantity : "2 L",
        price : "Rs 430",
        strikedOdprice : "Rs 480"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195406_4-ariel-matic-front-load-liquid-detergent.jpg",
        brand:"Whiskas",
        name : "Matic Front Load Liquid Detergent",
        Quantity : "1 L",
        price : "Rs 200.00",
        strikedOdprice : "Rs 250.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40222463_1-surf-excel-matic-liquid-detergent-front-load-refill-pack.jpg",
        brand:"Whiskas",
        name : "Matic Liquid Detergent - Front Load, Refill Pack",
        Quantity : "4 L",
        price : "Rs 830",
        strikedOdprice : "Rs 960"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195406_4-ariel-matic-front-load-liquid-detergent.jpg",
        brand:"Whiskas",
        name : "Matic Front Load Liquid Detergent",
        Quantity : "1 L",
        price : "Rs 176.00",
        strikedOdprice : "Rs 220.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/212128_26-surf-excel-matic-top-load-detergent-powder.jpg",
        brand:"Whiskas",
        name : "Matic Top Load Detergent Powder",
        Quantity : "1 kg",
        price : "Rs 350",
        strikedOdprice : "Rs 410"

    },
    {
       
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40130609_3-surf-excel-detergent-liquid-matic-top-load.jpg",
        brand:"Whiskas",
        name : "Detergent - Liquid, Matic, Top Load",
        Quantity : "2 L",
        price : "Rs 359",
        strikedOdprice : "Rs 420"

    },
    {
        
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1208976_5-bb-combo-lizol-floor-cleaner-floral-2l-harpic-toilet-cleaner-liquid-original-1l.jpg",
        brand:"Whiskas",
        name : "Harpic Toilet Cleaner Liquid, Original 1 L + Lizol Floor & Surface Cleaner Liquid, Floral 2 L",
        Quantity : "1 items",
        price : "Rs 565.15",
        strikedOdprice : "Rs 594.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/100134172_6-pril-dishwash-liquid-lime.jpg",
        brand:"Whiskas",
        name : "Dishwash Liquid - Lime",
        Quantity : "750 ml",
        price : "Rs 159",
        strikedOdprice : "Rs 204"

    }
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