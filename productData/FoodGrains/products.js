
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


var checkboxArr = document
    .querySelectorAll(".checkbox")

for (var i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].addEventListener("click", function () {
        var newArr = [];


        if (brandFilter1.checked === true) {
            newArr = foodgrainsArr.filter(function (elem) {
                return elem.brand == "Aashirvad";
            });
            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return elem.brand == "Dhara";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter3.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return elem.brand == "BB Royal";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter4.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return elem.brand == "Fortune";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter5.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return elem.brand == "Shree Neelkamal"
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter6.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return elem.brand == "BB Popular"
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter7.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return elem.Quantity.includes("can");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter8.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return elem.Quantity.includes("tin");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter9.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return parseInt(elem.price) <= 20;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter10.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return parseInt(elem.price) >= 20 && parseInt(elem.price) <= 50;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter11.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return parseInt(elem.price) > 50 && parseInt(elem.price) <= 100;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter12.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return parseInt(elem.price) > 100 && parseInt(elem.price) <= 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter13.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return parseInt(elem.price) > 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter14.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 5;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter15.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 5 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 10;;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter16.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 10 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter17.checked === true) {
            var tempArr = foodgrainsArr.filter(function (elem) {
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
            displayProducts(foodgrainsArr);
        }
        else {
            displayProducts(newArr)
        }
    });
}
;
displayProducts(foodgrainsArr)