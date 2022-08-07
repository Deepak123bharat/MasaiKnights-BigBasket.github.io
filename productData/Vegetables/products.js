var vegetableArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40048457_9-fresho-potato-new-crop.jpg",
        name : "Potato ",
        brand: "Fresho",
        Quantity : "5 Kg",
        price : "105.40",
        strikedOdprice : "167.60"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000046_17-fresho-beetroot.jpg",
        brand: "Fresho",
        name : "Beetroot",
        Quantity : "1 Kg",
        price : "84",
        strikedOdprice : "105"

    },
    
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000050_20-fresho-bitter-gourd.jpg",
        brand: "Fresho",
        name : "Bitter Gourd",
        Quantity : "1 Kg",
        price : "64",
        strikedOdprice : "89"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000091_18-fresho-coccinia.jpg",
        brand: "Fresho",
        name : "Coccinia",
        Quantity : "500 g",
        price : "54",
        strikedOdprice : "68"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
        brand: "Fresho",
        name : "Ladies Finger",
        Quantity : "250 g",
        price : "18",
        strikedOdprice : "40"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
        brand: "Fresho",
        name : "Onion",
        Quantity : "5 kg",
        price : "101",
        strikedOdprice : "181.25"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/mm/10000162_16-fresho-pumpkin-green.jpg",
        brand: "Fresho",
        name : "Pumpkin - Green",
        Quantity : "1 kg",
        price : "37",
        strikedOdprice : "54"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/mm/10000204_16-fresho-tomato-local.jpg",
        brand: "Fresho",
        name : "Tomato Hybrid/Tameta",
        Quantity : "1 kg",
        price : "41",
        strikedOdprice : "64"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1202151_1-fresho-garlic-ginger-250-gm-each.jpg",
        brand: "Fresho",
        name : "Garlic - Ginger",
        Quantity : "1 pack(200g)",
        price : "44",
        strikedOdprice : "55"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg",
        brand: "Fresho",
        name : "Coriander Leaves",
        Quantity : "1 Kg",
        price : "493",
        strikedOdprice : "616"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000366_10-fresho-parwal.jpg",
        brand: "Fresho",
        name : "Parwal",
        Quantity : "500 g",
        price : "61",
        strikedOdprice : "R76"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/mm/30000434_12-fresho-brinjal-purple-bharta.jpg",
        brand: "Fresho",
        name : "Brinjal - Nagpur",
        Quantity : "1 Kg",
        price : "73",
        strikedOdprice : "91"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20000745_5-fresho-bottle-gourd.jpg",
        brand: "Fresho",
        name : "Bottle Gourd",
        Quantity : "1 pc (500 g - 800 g)",
        price : "40",
        strikedOdprice : "60"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/30000583_4-fresho-sponge-gourd.jpg",
        brand: "Fresho",
        name : "Sponge Gourd",
        Quantity : "1 Kg",
        price : "96",
        strikedOdprice : "120"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/20000703_9-fresho-brinjal-purple-long.jpg",
        brand: "Fresho",
        name : "Beetroot/Beet",
        Quantity : "1 Kg",
        price : "84",
        strikedOdprice : "105"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
        brand: "Fresho",
        name : "Cabbage",
        Quantity : "1 pc(350 g - 500 g",
        price : "55",
        strikedOdprice : "68"

    }
]


document.querySelector("#title").innerText+=" ("+vegetableArr.length+")";



var checkboxArr = document
    .querySelectorAll(".checkbox")

for (var i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].addEventListener("click", function () {
        var newArr = [];


        if (brandFilter1.checked === true) {
            newArr = vegetableArr.filter(function (elem) {
                return elem.brand == "Fresho";
            });
            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return elem.brand == "BB combo";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter3.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return elem.brand == "";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter4.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return elem.brand == "";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter5.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return elem.brand == ""
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter6.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return elem.brand == ""
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter7.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return elem.brand == ""
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter8.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return elem.brand == ""
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter9.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return parseInt(elem.price) <= 20;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter10.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return parseInt(elem.price) >= 20 && parseInt(elem.price) <= 50;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter11.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return parseInt(elem.price) > 50 && parseInt(elem.price) <= 100;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter12.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return parseInt(elem.price) > 100 && parseInt(elem.price) <= 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter13.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return parseInt(elem.price) > 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter14.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 5;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter15.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 5 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 10;;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter16.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 10 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter17.checked === true) {
            var tempArr = vegetableArr.filter(function (elem) {
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
            displayProducts(vegetableArr);
        }
        else {
            displayProducts(newArr)
        }
    });
}
;
displayProducts(vegetableArr)