
var snacksArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/266109_19-maggi-2-minute-instant-noodles-masala.jpg",
        brand : "MAGGI",
        name : "2-Minute Instant Masala Noodles - Made With Quality Spices, Source Of Iron",
        Quantity : "50g pouch",
        price : "90",
        strikedOdprice : "95"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40163718_11-fresho-frozen-green-peas.jpg",
        brand : "Fresho",
        name : "Frozen Green Peas ",
        Quantity : "250g-pouch",
        price : "201",
        strikedOdprice : "220"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/268654_3-anil-vermicelli.jpg",
        brand : "Anil",
        name : "Vermicelli",
        Quantity : "100g -pouch",
        price : "75.50",
        strikedOdprice : "85"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40023491_5-britannia-milk-bikis-biscuits.jpg",
        brand : "Britannia",
        name : "Natural Care Tea",
        Quantity : "200 g Pouch",
        price : "209",
        strikedOdprice : "209"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40007739_18-quaker-oats-multigrain-breakfast-cereal-rich-source-of-energy-nutritious-easy-to-cook.jpg",
        brand : "Quaker",
        name : "Oats - Multigrain, Breakfast Cereal, Rich In Fibre & Calcium, Good For Heart",
        Quantity : "200g-pouch",
        price : "285.00",
        strikedOdprice : "285"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1203945_2-britannia-nutri-choice-hi-fibre-digestive-biscuits.jpg",
        brand : "Britannia NutriChoice",
        name : "Digestive High Fibre Biscuits,",
        Quantity : "500g-pouch",
        price : "300",
        strikedOdprice : "300"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/271205_14-id-fresho-idly-dosa-batter.jpg",
        brand : "iD Fresho",
        name : "Idly & Dosa Batter",
        Quantity : "200ml X 24(Multipack)",
        price : "806.40",
        strikedOdprice : "1200"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/100012372_18-britannia-little-hearts-classic-sugar-sprinkled-heart-shaped-biscuits.jpg",
        brand : "Britannia",
        name : "Little Hearts Classic - Sugar Sprinkled, Heart Shaped Biscuits",
        Quantity : "15g",
        price : "5",
        strikedOdprice : "7"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40002118_12-kissan-mixed-fruit-jam.jpg",
        brand : "Kissan",
        name : "Mixed Fruit Jam",
        Quantity : "750g-pouch",
        price : "329.73",
        strikedOdprice : "400"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/263526_17-britannia-good-day-cashew-cookies.jpg",
        brand : "Britannia",
        name : "Good Day Cashew Cookies",
        Quantity : "1 kg Carton",
        price : "530",
        strikedOdprice : "600"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40148709_7-dabur-100-pure-honey.jpg",
        brand : "Dabur",
        name : "100% Pure Honey",
        Quantity : "15.3g-pouch",
        price : "5",
        strikedOdprice : "7"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/100012354_13-britannia-bourbon-chocolate-cream-biscuits.jpg",
        brand : "Britannia",
        name : "Bourbon Chocolate Cream Biscuits",
        Quantity : "500 g pouch",
        price : "162",
        strikedOdprice : "200"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/30003294_14-id-fresho-malabar-parotaparatha.jpg",
        brand : "iD Fresho",
        name : "Malabar Parota/Paratha",
        Quantity : "3500g-pouch",
        price : "342",
        strikedOdprice : "400"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/264585_14-britannia-milk-bikis-biscuits.jpg",
        brand : "Britannia",
        name : "Milk Bikis Biscuits",
        Quantity : "1 kg",
        price : "540",
        strikedOdprice : "600"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1212774_3-lays-potato-chips-indias-magic-masala.jpg",
        brand : "Lays",
        name : "Potato Chips - Indias Magic Masala",
        Quantity : "5 L can",
        price : "70",
        strikedOdprice : "70"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1211928_1-bb-combo-fresho-frozen-green-peas-500-g-bb-royal-mp-sharbati-atta-5-kg.jpg",
        brand : "bb Combo",
        name : "Fresho Frozen Green Peas 500 G + BB Royal MP Sharbati Atta 5 Kg",
        Quantity : "1kg ",
        price : "427",
        strikedOdprice : "427"

    },
]
document.querySelector("#title").innerText+=" ("+snacksArr.length+")";


displayProducts(snacksArr);

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
    
    var product = snacksArr.filter(function(elem,i){
        return index==i;
    })
    cartArr.push(product[0]);
    localStorage.setItem("cart",JSON.stringify(cartArr))

}