
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


var checkboxArr = document
    .querySelectorAll(".checkbox")

for (var i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].addEventListener("click", function () {
        var newArr = [];


        if (brandFilter1.checked === true) {
            newArr = snacksArr.filter(function (elem) {
                return elem.brand == "MAGGI";
            });
            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return elem.brand == "Fresho";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter3.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return elem.brand == "Lays";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter4.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return elem.brand == "Britannia";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter5.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return elem.brand == "Shree Neelkamal"
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter6.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return elem.brand == "BB Popular"
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter7.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return elem.Quantity.includes("can");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter8.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return elem.Quantity.includes("tin");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter9.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return parseInt(elem.price) <= 20;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter10.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return parseInt(elem.price) >= 20 && parseInt(elem.price) <= 50;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter11.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return parseInt(elem.price) > 50 && parseInt(elem.price) <= 100;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter12.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return parseInt(elem.price) > 100 && parseInt(elem.price) <= 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter13.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return parseInt(elem.price) > 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter14.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 5;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter15.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 5 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 10;;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter16.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 10 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter17.checked === true) {
            var tempArr = snacksArr.filter(function (elem) {
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
            displayProducts(snacksArr);
        }
        else {
            displayProducts(newArr)
        }
    });
}
;
displayProducts(snacksArr)