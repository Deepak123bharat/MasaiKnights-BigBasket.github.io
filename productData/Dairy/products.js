
var dairyArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1202684_3-amul-taaza-homogenised-toned-milk.jpg",
        brand : "Amul Taaza",
        name : "Homogenised Toned Milk",
        Quantity : "6X1 Multipack",
        price : "399.84",
        strikedOdprice : "408"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/104864_8-amul-butter-pasteurised.jpg",
        brand : "Amul",
        name : "Pasteurised Butter",
        Quantity : "500 g Carton",
        price : "247",
        strikedOdprice : "255"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1207078_2-amul-masti-buttermilk-spice.jpg",
        brand : "Amul",
        name : "Masti Buttermilk - Spice",
        Quantity : "2x1 Multipack",
        price : "94.08",
        strikedOdprice : "100"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1202761_3-amul-cheese-slices.jpg",
        brand : "Amul",
        name : "Malai Paneer",
        Quantity : "200 g Pouch",
        price : "82",
        strikedOdprice : "89"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40045943_1-amul-butter-pasteurised.jpg",
        brand : "Amul",
        name : "Cheese Slices - Rich In Protein, Wholesome, No Added Sugar",
        Quantity : "2x200 g Multipack",
        price : "254.80",
        strikedOdprice : "260"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1215454_1-britannia-bake-rusk-toast.jpg",
        brand : "Amul",
        name : "Pasteurised Butter",
        Quantity : "200 g Tub",
        price : "106",
        strikedOdprice : "116"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1215454_1-britannia-bake-rusk-toast.jpg",
        brand : "Britannia",
        name : "Bake Rusk Toast",
        Quantity : "200 g Tub",
        price : "198",
        strikedOdprice : "219"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/104707_8-amul-homogenised-standardised-milk.jpg",
        brand : "Amul",
        name : "Gold Homogenised Standardised Milk",
        Quantity : "1 L Carton",
        price : "74",
        strikedOdprice : "80"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195180_2-moreish-brown-bread-whole-wheat-flour-rich-in-fibre-protein.jpg",
        brand : "Moreish",
        name : "Brown Bread - Whole Wheat Flour, Rich In Fibre & Protein`",
        Quantity : "400 g",
        price : "38",
        strikedOdprice : "40"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/279585_8-amul-malai-paneer-block.jpg",
        brand : "Amul",
        name : "Malai Paneer - Block",
        Quantity : "1 kg Carton",
        price : "378",
        strikedOdprice : "400"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/104615_9-amul-processed-cheese-cubes.jpg",
        brand : "Amul",
        name : "Processed Cheese Chiplets Cubes",
        Quantity : "200 g (8 Cubes)",
        price : "122",
        strikedOdprice : "128"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40058175_2-amul-amulya-dairy-whitener.jpg",
        brand : "Amul",
        name : "Amulya Dairy Whitener",
        Quantity : "1 Kg pouch",
        price : "415",
        strikedOdprice : "425"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1217239_1-nestle-everyday-dairy-whitener-milk-powder-for-tea.jpg",
        brand : "Nestle",
        name : "Everyday Dairy Whitener - Milk Powder for Tea",
        Quantity : "3x1 Kg Multipack",
        price : "1605",
        strikedOdprice : "1650"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40009983_18-britannia-gobbles-fruity-fun-cake.jpg",
        brand : "Britannia",
        name : "Gobbles Bar Cake - Fruity Fun, Soft & Fluffy Snack",
        Quantity : "110 g",
        price : "27.30",
        strikedOdprice : "30"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40005030_2-amul-fresh-cream-25-milk-fat-low-fat.jpg",
        brand : "Amul",
        name : "Fresh Cream - 25% Milk Fat Low Fat",
        Quantity : "1 L Carton",
        price : "205",
        strikedOdprice : "214"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40088412_6-hersheys-milk-shake-chocolate.jpg",
        brand : "Hersheys",
        name : "Milk Shake - Chocolate",
        Quantity : "180 ml",
        price : "31.50",
        strikedOdprice : "35"

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