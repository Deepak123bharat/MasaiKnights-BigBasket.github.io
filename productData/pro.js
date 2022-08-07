var brandFilter1 = document.querySelector("#brand-filter1");
var brandFilter2 = document.querySelector("#brand-filter2");
var brandFilter3 = document.querySelector("#brand-filter3");
var brandFilter4 = document.querySelector("#brand-filter4");
var brandFilter5 = document.querySelector("#brand-filter5");
var brandFilter6 = document.querySelector("#brand-filter6");
var brandFilter7 = document.querySelector("#brand-filter7");
var brandFilter8 = document.querySelector("#brand-filter8");
var brandFilter9 = document.querySelector("#brand-filter9");
var brandFilter10 = document.querySelector("#brand-filter10");
var brandFilter11 = document.querySelector("#brand-filter11");
var brandFilter12 = document.querySelector("#brand-filter12");
var brandFilter13 = document.querySelector("#brand-filter13");
var brandFilter14 = document.querySelector("#brand-filter14");
var brandFilter15 = document.querySelector("#brand-filter15");
var brandFilter16 = document.querySelector("#brand-filter16");
var brandFilter17 = document.querySelector("#brand-filter17");

function displayProducts(data) {
  document.querySelector(".products-cards").innerText = "";
  data.map(function (elem, index) {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div2.innerText = "GET 20% OFF";

    var div3 = document.createElement("div");
    div3.setAttribute("class", "image-div");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image_adress);
    image.addEventListener("click", (ele) => {
      var title = document.querySelector(".products-cards > div> div> h6").innerText
      var price = document.querySelector(".products-cards > div> div> span > span:last-child").innerText
      var desc = document.querySelector(".products-cards > div> div> a").innerText
      var descriptionObject = {
        "imgscr": elem.image_adress,
        "title": title,
        "price": price,
        "desc": desc,
      }
      localStorage.setItem("productDescription", JSON.stringify(descriptionObject))
      window.location.href = "./../../description.html"
    })
    div3.append(image);
    var div4 = document.createElement("div");
    var brand = document.createElement("h6");
    brand.innerText = elem.brand;
    var a1 = document.createElement("a");
    a1.innerText = elem.name;
    div4.append(brand, a1);
    var div5 = document.createElement("div");
    var size = document.createElement("h5");
    size.innerText = elem.Quantity;
    var span2 = document.createElement("span");
    var price = document.createElement("span");
    price.innerText = "Rs " + elem.price;
    price.style.fontWeight = "bold";
    var strikedPrice = document.createElement("span");
    strikedPrice.innerText = "Rs " + elem.strikedOdprice;
    strikedPrice.style.textDecoration = "line-through";
    strikedPrice.style.fontSize = "11px";
    span2.append(strikedPrice, price);
    var deleveryType = document.createElement("p");
    deleveryType.innerHTML =
      '<i class="fa-solid fa-truck"></i> Standard Delevery Tomorrow Morning';
    var span4 = document.createElement("span");
    var span5 = document.createElement("span");
    span5.innerText = "Qty : ";
    var quantity = document.createElement("input");
    quantity.setAttribute("type", "number");
    quantity.style.width = "60px";
    var button = document.createElement("button");

    button.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
    button.addEventListener("click", function () {
      var obj = {
        image_adress:elem.image_adress,
        brand:elem.brand,
        name:elem.name,
        Quantity:elem.Quantity,
        price:elem.price,
        strikedOdprice:elem.strikedOdprice,
      }
      addToCart(obj);
    });
    span4.append(span5, quantity, button);

    div5.style.padding = "5px";
    div4.style.padding = "5px";

    div4.style.fontWeight = "bold";

    div5.append(size, span2, deleveryType, span4);
    div1.append(div2, div3, div4, div5);
    document.querySelector(".products-cards").append(div1);
  });
}

var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(obj) {
  cartArr.push(obj);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}