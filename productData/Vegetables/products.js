var vegetableArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40048457_9-fresho-potato-new-crop.jpg",
        name : "Potato ",
        brand: "Fresho",
        Quantity : "5 Kg",
        price : "Rs 105.40",
        strikedOdprice : "Rs 167.60"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000046_17-fresho-beetroot.jpg",
        brand: "Fresho",
        name : "Beetroot",
        Quantity : "1 Kg",
        price : "Rs 84",
        strikedOdprice : "Rs 105"

    },
    
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000050_20-fresho-bitter-gourd.jpg",
        brand: "Fresho",
        name : "Bitter Gourd",
        Quantity : "1 Kg",
        price : "Rs 64",
        strikedOdprice : "Rs 89"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000091_18-fresho-coccinia.jpg",
        brand: "Fresho",
        name : "Coccinia",
        Quantity : "500 g",
        price : "Rs 54",
        strikedOdprice : "Rs 68"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
        brand: "Fresho",
        name : "Ladies Finger",
        Quantity : "250 g",
        price : "Rs 18",
        strikedOdprice : "Rs 40"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
        brand: "Fresho",
        name : "Onion",
        Quantity : "5 kg",
        price : "Rs 101",
        strikedOdprice : "Rs 181.25"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/mm/10000162_16-fresho-pumpkin-green.jpg",
        brand: "Fresho",
        name : "Pumpkin - Green",
        Quantity : "1 kg",
        price : "Rs 37",
        strikedOdprice : "Rs 54"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/mm/10000204_16-fresho-tomato-local.jpg",
        brand: "Fresho",
        name : "Tomato Hybrid/Tameta",
        Quantity : "1 kg",
        price : "Rs 41",
        strikedOdprice : "Rs 64"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1202151_1-fresho-garlic-ginger-250-gm-each.jpg",
        brand: "Fresho",
        name : "Garlic - Ginger",
        Quantity : "1 pack(200g)",
        price : "Rs 44",
        strikedOdprice : "Rs 55"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg",
        brand: "Fresho",
        name : "Coriander Leaves",
        Quantity : "1 Kg",
        price : "Rs 493",
        strikedOdprice : "Rs 616"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000366_10-fresho-parwal.jpg",
        brand: "Fresho",
        name : "Parwal",
        Quantity : "500 g",
        price : "Rs 61",
        strikedOdprice : "Rs 76"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/mm/30000434_12-fresho-brinjal-purple-bharta.jpg",
        brand: "Fresho",
        name : "Brinjal - Nagpur",
        Quantity : "1 Kg",
        price : "Rs 73",
        strikedOdprice : "Rs 91"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20000745_5-fresho-bottle-gourd.jpg",
        brand: "Fresho",
        name : "Bottle Gourd",
        Quantity : "1 pc (500 g - 800 g)",
        price : "Rs 40",
        strikedOdprice : "Rs 60"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/30000583_4-fresho-sponge-gourd.jpg",
        brand: "Fresho",
        name : "Sponge Gourd",
        Quantity : "1 Kg",
        price : "Rs 96",
        strikedOdprice : "Rs 120"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20000703_9-fresho-brinjal-purple-long.jpg",
        brand: "Fresho",
        name : "Beetroot/Beet",
        Quantity : "1 Kg",
        price : "Rs 84",
        strikedOdprice : "Rs 105"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
        brand: "Fresho",
        name : "Cabbage",
        Quantity : "1 pc(350 g - 500 g",
        price : "Rs 55",
        strikedOdprice : "Rs 68"

    }
]


document.querySelector("#title").innerText+=" ("+vegetableArr.length+")";



displayProducts(vegetableArr);

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
        quantity.defaultValue=1;
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