
// cleaning
var dairyArr = [
    {
        image_adress:"https://www.bigbasket.com/pd/1207190/harpic-original-disinfectant-toilet-cleaner-liquid-3x1-l/?nc=cl-prod-list&t_pg=l1-cat-cleaning-household&t_p=cl-temp-1&t_s=cl-prod-list&t_pos=3&t_ch=desktop",
        brand:"Harpic",
        name : "Disinfectant Toilet Cleaner Liquid - Originalc",
        Quantity : "1 L",
        price : " 567.40",
        strikedOdprice : " 585.60"

    },
    {
        
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40081006_10-harpic-disinfectant-bathroom-cleaner-liquid-lemon.jpg",
        brand:"Harpic",
        name : "Disinfectant Bathroom Cleaner Liquid, Lemon",
        Quantity : "1 L",
        price : " 172.90",
        strikedOdprice : " 180.00"

    },
    
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/266945_21-surf-excel-easy-wash-detergent-powder.jpg",
        brand:"Harpic",
        name : "Easy Wash Detergent Powder",
        Quantity : "1.5 Kg",
        price : " 199",
        strikedOdprice : " 226"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40200751_1-vim-dishwash-liquid-gel-lemon-refill-pouch.jpg",
        brand:"Harpic",
        name : "Dishwash Liquid Gel Lemon Refill Pouch",
        Quantity : "2 L",
        price : " 355",
        strikedOdprice : " 445"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40129070_8-lizol-disinfectant-surface-floor-cleaner-liquid-citrus-kills-999-germs.jpg",
        brand:"Vim",
        name : "Disinfectant Surface & Floor Cleaner Liquid - Citrus",
        Quantity : "5 L",
        price : "781.08",
        strikedOdprice : " 840"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40038652_2-vim-dishwash-bar-lemon.jpg",
        brand:"Vim",
        name : "Dishwash Bar - Lemon",
        Quantity : "60 G",
        price : " 5",
        strikedOdprice : " 5.50"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1208975_4-harpic-harpic-bathroom-cleaner-lemon-1-l-harpic-toilet-cleaner-original-1-l.jpg",
        brand:"Vim",
        name : "Bathroom Cleaner Lemon 1 L + Toilet Cleaner, Original 1 L",
        Quantity : "1 L + 1 L",
        price : " 362.05",
        strikedOdprice : " 394.05"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/230745_18-comfort-after-wash-morning-fresh-fabric-conditioner.jpg",
        brand:"Vim",
        name : "After Wash Morning Fresh Fabric Conditioner",
        Quantity : "860ml",
        price : " 205",
        strikedOdprice : " 225"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40130608_7-comfort-after-wash-morning-fresh-fabric-conditioner.jpg",
        brand:"Vim",
        name : "After Wash Fabric Conditioner - Morning Fresh",
        Quantity : "2 L",
        price : " 430",
        strikedOdprice : " 480"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195406_4-ariel-matic-front-load-liquid-detergent.jpg",
        brand:"Surf Excel",
        name : "Matic Front Load Liquid Detergent",
        Quantity : "1 L",
        price : " 200.00",
        strikedOdprice : " 250.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40222463_1-surf-excel-matic-liquid-detergent-front-load-refill-pack.jpg",
         brand:"Surf Excel",
        name : "Matic Liquid Detergent - Front Load, Refill Pack",
        Quantity : "4 L",
        price : " 830",
        strikedOdprice : " 960"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195406_4-ariel-matic-front-load-liquid-detergent.jpg",
        brand:"Surf Excel",
        name : "Matic Front Load Liquid Detergent",
        Quantity : "1 L",
        price : "176.00",
        strikedOdprice : " 220.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/212128_26-surf-excel-matic-top-load-detergent-powder.jpg",
        brand:"Surf Excel",
        name : "Matic Top Load Detergent Powder",
        Quantity : "1 kg",
        price : "350",
        strikedOdprice : " 410"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40130609_3-surf-excel-detergent-liquid-matic-top-load.jpg",
        brand:"Surf Excel",
        name : "Detergent - Liquid, Matic, Top Load",
        Quantity : "2 L",
        price : " 359",
        strikedOdprice : " 420"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1208976_5-bb-combo-lizol-floor-cleaner-floral-2l-harpic-toilet-cleaner-liquid-original-1l.jpg",
        brand:"Ariel",
        name : "Harpic Toilet Cleaner Liquid, Original 1 L + Lizol Floor & Surface Cleaner Liquid, Floral 2 L",
        Quantity : "1 items",
        price : " 565.15",
        strikedOdprice : " 594.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/100134172_6-pril-dishwash-liquid-lime.jpg",
        brand:"Ariel",
        name : "Dishwash Liquid - Lime",
        Quantity : "750 ml",
        price : "159",
        strikedOdprice : " 204"

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