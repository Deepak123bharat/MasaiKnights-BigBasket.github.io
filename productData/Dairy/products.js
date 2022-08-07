
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


var checkboxArr = document
    .querySelectorAll(".checkbox")

for (var i = 0; i < checkboxArr.length; i++) {

    checkboxArr[i].addEventListener("click", function () {
        var newArr = [];


        if (brandFilter1.checked === true) {
            newArr = dairyArr.filter(function (elem) {
                return elem.brand == "Amul";
            });
            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "Nestle";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter3.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "Britannia";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter4.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "Hersheys";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter5.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.Quantity.includes("tubs");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter6.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.Quantity.includes("pouch");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter7.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.Quantity.includes("can");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter8.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.Quantity.includes("tin");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter9.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return parseInt(elem.price) <= 20;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter10.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return parseInt(elem.price) >= 20 && parseInt(elem.price) <= 50;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter11.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return parseInt(elem.price) > 50 && parseInt(elem.price) <= 100;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter12.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return parseInt(elem.price) > 100 && parseInt(elem.price) <= 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter13.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return parseInt(elem.price) > 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter14.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 5;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter15.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 5 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 10;;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter16.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 10 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter17.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
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
            displayProducts(dairyArr);
        }
        else {
            displayProducts(newArr)
        }
    });
}
;
displayProducts(dairyArr)