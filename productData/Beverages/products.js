

beveragesArr = [
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/20005895_6-nescafe-sunrise-instant-coffee-chicory-mixture.jpg",
        brand: "Nescafe",
        name: "Sunrise Instant Coffee - Chicory Mixture",
        Quantity: "50g pouch",
        price: "90",
        strikedOdprice: "95"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/266551_8-taj-mahal-tea.jpg",
        brand: "Taj Mahal",
        name: "Tea",
        Quantity: "250g-pouch",
        price: "201",
        strikedOdprice: "220"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/266591_7-3-roses-tea-dust.jpg",
        brand: "3Roses",
        name: "Dust Tea",
        Quantity: "100g -pouch",
        price: "75.50",
        strikedOdprice: "85"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/281594_6-3-roses-natural-care-tea.jpg",
        brand: "3Roses",
        name: "Natural Care Tea",
        Quantity: "200 g Pouch",
        price: "209",
        strikedOdprice: "209"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/266579_24-bru-instant-coffee.jpg",
        brand: "BRU",
        name: "Instant Coffee",
        Quantity: "200g-pouch",
        price: "285.00",
        strikedOdprice: "285"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/186070_8-cothas-coffee-.jpg",
        brand: "Cothas Coffee",
        name: "Coffee-Regular",
        Quantity: "500g-pouch",
        price: "300",
        strikedOdprice: "300"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/1214886_8-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
        brand: "Fresho",
        name: "Tender Coconut Water-No Added sugar Flavours ",
        Quantity: "200ml X 24(Multipack)",
        price: "806.40",
        strikedOdprice: "1200"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/20006249_4-boost-drink-powder-sports-stars-first-choice.jpg",
        brand: "Boost",
        name: "Drink Powder - Sports Stars First Choice",
        Quantity: "15g",
        price: "5",
        strikedOdprice: "7"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/40071513_8-horlicks-health-nutrition-drink-classic-malt.jpg",
        brand: "Horlicks",
        name: "Health & Nutrition Drink",
        Quantity: "750g-pouch",
        price: "329.73",
        strikedOdprice: "400"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/102871_11-red-label-tea.jpg",
        brand: "Red Label",
        name: "Tea",
        Quantity: "1 kg Carton",
        price: "530",
        strikedOdprice: "600"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/40122309_6-tang-instant-drink-mix-lemon.jpg",
        brand: "Tang",
        name: "Instant Drink Mix - Lemon",
        Quantity: "15.3g-pouch",
        price: "5",
        strikedOdprice: "7"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/262799_24-bru-filter-coffee-green-label.jpg",
        brand: "BRU",
        name: "Filter Coffee - Green Label",
        Quantity: "500 g pouch",
        price: "162",
        strikedOdprice: "200"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/297576_11-tata-tea-chakra-gold-dust-tea.jpg",
        brand: "Tata Tea Chakra",
        name: "Gold Strong Tea With Long Lasting Taste - Black Tea",
        Quantity: "3500g-pouch",
        price: "342",
        strikedOdprice: "400"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/226491_10-red-label-tea-natural-care.jpg",
        brand: "Red Label",
        name: "Tea - Natural Care",
        Quantity: "1 kg",
        price: "540",
        strikedOdprice: "600"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/174367_2-bisleri-mineral-water.jpg",
        brand: "Bisleri",
        name: "Mineral Water",
        Quantity: "5 L can",
        price: "70",
        strikedOdprice: "70"

    },
    {
        image_adress: "https://www.bigbasket.com/media/uploads/p/s/240065_14-tata-tea-gold-tea.jpg",
        brand: "Tata Tea Gold",
        name: "Assam Teas With Gently Rolled Aromatic Long Leaves, Rich & Aromatic Chai, Black Tea",
        Quantity: "1kg ",
        price: "427",
        strikedOdprice: "427"

    },
]


document.querySelector("#title").innerText += " (" + beveragesArr.length + ")";

var checkboxArr = document
    .querySelectorAll(".checkbox")

for (var i = 0; i < checkboxArr.length; i++) {

    checkboxArr[i].addEventListener("click", function () {
        var newArr = [];


        if (brandFilter1.checked === true) {
            newArr = beveragesArr.filter(function (elem) {
                return elem.brand == "Nescafe";
            });
            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return elem.brand == "BRU";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter3.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return elem.brand == "Fresho";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter4.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return elem.brand == "3Roses";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter5.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return elem.Quantity.includes("tubs");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter6.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return elem.Quantity.includes("pouch");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter7.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return elem.Quantity.includes("can");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter8.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return elem.Quantity.includes("tin");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter9.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return parseInt(elem.price) <= 20;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter10.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return parseInt(elem.price) >= 20 && parseInt(elem.price) <= 50;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter11.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return parseInt(elem.price) > 50 && parseInt(elem.price) <= 100;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter12.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return parseInt(elem.price) > 100 && parseInt(elem.price) <= 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter13.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return parseInt(elem.price) > 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter14.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 5;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter15.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 5 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 10;;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter16.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 10 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter17.checked === true) {
            var tempArr = beveragesArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (
            brandFilter1.checked == false &&
            brandFilter2.checked == false &&
            brandFilter3.checked == false &&
            brandFilter4.checked == false &&
            brandFilter5.checked == false &&
            brandFilter6.checked == false &&
            brandFilter7.checked == false &&
            brandFilter8.checked == false &&
            brandFilter9.checked == false &&
            brandFilter10.checked == false &&
            brandFilter11.checked == false &&
            brandFilter12.checked == false &&
            brandFilter13.checked == false &&
            brandFilter14.checked == false &&
            brandFilter15.checked == false &&
            brandFilter16.checked == false &&
            brandFilter17.checked == false
        ) {
            displayProducts(beveragesArr);
        }
        else {
            displayProducts(newArr)
        }
    });
}
;
displayProducts(beveragesArr)