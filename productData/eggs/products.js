// eggs
var dairyArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40072320_2-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
        brand:"Fresho",
        name : "Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free",
        Quantity : "12 pcs",
        price : " 79.40",
        strikedOdprice : " 110.60"

    },
    {
        
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1203477_2-fresho-eggs-regular.jpg",
        brand:"Fresho",
        name : "Eggs - Regular",
        Quantity : "2X6 pcs",
        price : " 72.90",
        strikedOdprice : " 80.00"

    },
    
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
        brand:"Fresho",
        name : "Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs",
        Quantity : "250 g",
        price : " 190",
        strikedOdprice : " 226"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1213737_1-bb-combo-fresho-farm-eggs-medium-30-pcs-kara-coconut-milk-uht-classic-imported-200-ml.jpg",
        brand:"Fresho",
        name : "Fresho Farm Eggs Medium 30 pcs + Kara Coconut Milk UHT Classic, Imported 200 ml",
        Quantity : "2 item",
        price : " 254",
        strikedOdprice : " 285"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000900_10-fresho-chicken-breast-boneless-antibiotic-residue-free-4-5-pcs.jpg",
        brand:"bb Combo",
        name : "Chicken Breast - Boneless, Antibiotic Residue-Free, 2- 4 pcs",
        Quantity : "500 g",
        price : " 259",
        strikedOdprice : " 360"

    },
    {
        
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
        brand:"Fresho",
        name : "Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g",
        Quantity : " 2 item",
        price : "448",
        strikedOdprice : " 500"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1220958_1-fresho-chicken-1-kg-bb-royal-biryani-basmati-rice-extra-long-1-kg-pouch.jpg",
        brand:"Fresho", 
        name : "Chicken 1 kg + BB Royal Biryani Basmati Rice - Extra Long 1 kg Pouch",
        Quantity : "2 items",
        price : "435",
        strikedOdprice : " 605"

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
                return elem.brand == "Fresho";
            });
            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "bb Combo";
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