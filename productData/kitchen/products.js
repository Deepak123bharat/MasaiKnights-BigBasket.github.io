// kithen

var dairyArr = [
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/30005108_18-pedigree-dry-dog-food-chicken-vegetables-for-adult-dogs.jpg",
        name : "Dry Pet Food - For Adult Dogs, Chicken & Vegetables",
        brand: "Eveready",
        Quantity : "15 kg",
        price : " 2686.40",
        strikedOdprice : " 3150.60"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40081006_10-harpic-disinfectant-bathroom-cleaner-liquid-lemon.jpg",
        brand: "Eveready",
        name : "Disinfectant Bathroom Cleaner Liquid, Lemon",
        Quantity : "1 L",
        price : " 172.90",
        strikedOdprice : " 180.00"

    },
    
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/266945_21-surf-excel-easy-wash-detergent-powder.jpg",
        brand: "Eveready",
        name : "Easy Wash Detergent Powder",
        Quantity : "1.5 Kg",
        price : "199",
        strikedOdprice : " 226"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40200751_1-vim-dishwash-liquid-gel-lemon-refill-pouch.jpg",
        brand: "Eveready",
        name : "Dishwash Liquid Gel Lemon Refill Pouch",
        Quantity : "2 L",
        price : " 355",
        strikedOdprice : " 445"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40129070_8-lizol-disinfectant-surface-floor-cleaner-liquid-citrus-kills-999-germs.jpg",
        brand: "Duracell",
        name : "Disinfectant Surface & Floor Cleaner Liquid - Citrus",
        Quantity : "5 L",
        price : " 781.08",
        strikedOdprice : " 840"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40038652_2-vim-dishwash-bar-lemon.jpg",
        brand: "Duracell",
        name : "Dishwash Bar - Lemon",
        Quantity : "60 G",
        price : " 5",
        strikedOdprice : " 5.50"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1208975_4-harpic-harpic-bathroom-cleaner-lemon-1-l-harpic-toilet-cleaner-original-1-l.jpg",
        brand: "Duracell",
        name : "Bathroom Cleaner Lemon 1 L + Toilet Cleaner, Original 1 L",
        Quantity : "1 L + 1 L",
        price : " 362.05",
        strikedOdprice : "394.05"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/230745_18-comfort-after-wash-morning-fresh-fabric-conditioner.jpg",
        brand: "Duracell",
        name : "After Wash Morning Fresh Fabric Conditioner",
        Quantity : "860ml",
        price : " 205",
        strikedOdprice : " 225"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40130608_7-comfort-after-wash-morning-fresh-fabric-conditioner.jpg",
        brand: "Duracell",
        name : "After Wash Fabric Conditioner - Morning Fresh",
        Quantity : "2 L",
        price : " 430",
        strikedOdprice : " 480"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195406_4-ariel-matic-front-load-liquid-detergent.jpg",
        brand:"Whiskas",
        name : "Matic Front Load Liquid Detergent",
        Quantity : "1 L",
        price : " 200.00",
        strikedOdprice : " 250.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40222463_1-surf-excel-matic-liquid-detergent-front-load-refill-pack.jpg",
        brand:"Whiskas",
        name : "Matic Liquid Detergent - Front Load, Refill Pack",
        Quantity : "4 L",
        price : " 830",
        strikedOdprice : " 960"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40195406_4-ariel-matic-front-load-liquid-detergent.jpg",
        brand:"Whiskas",
        name : "Matic Front Load Liquid Detergent",
        Quantity : "1 L",
        price : " 176.00",
        strikedOdprice : " 220.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/212128_26-surf-excel-matic-top-load-detergent-powder.jpg",
        brand:"Whiskas",
        name : "Matic Top Load Detergent Powder",
        Quantity : "1 kg",
        price : " 350",
        strikedOdprice : " 410"

    },
    {
       
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/40130609_3-surf-excel-detergent-liquid-matic-top-load.jpg",
        brand:"Whiskas",
        name : "Detergent - Liquid, Matic, Top Load",
        Quantity : "2 L",
        price : " 359",
        strikedOdprice : " 420"

    },
    {
        
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/1208976_5-bb-combo-lizol-floor-cleaner-floral-2l-harpic-toilet-cleaner-liquid-original-1l.jpg",
        brand:"Whiskas",
        name : "Harpic Toilet Cleaner Liquid, Original 1 L + Lizol Floor & Surface Cleaner Liquid, Floral 2 L",
        Quantity : "1 items",
        price : " 565.15",
        strikedOdprice : "594.00"

    },
    {
        image_adress:"https://www.bigbasket.com/media/uploads/p/s/100134172_6-pril-dishwash-liquid-lime.jpg",
        brand:"Whiskas",
        name : "Dishwash Liquid - Lime",
        Quantity : "750 ml",
        price : " 159",
        strikedOdprice : " 204"

    }
]

document.querySelector("#title").innerText+=" ("+dairyArr.length+")";


var checkboxArr = document
    .querySelectorAll(".checkbox")

for (var i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].addEventListener("click", function () {
        var newArr = [];


        if (brandFilter1.checked === true) {
            newArr = dairyArr.filter(function (elem) {
                return elem.brand == "Eveready";
            });
            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "Duracell";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter3.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "Whiskas";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter4.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "Fortune";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter5.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "Shree Neelkamal"
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter6.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.brand == "BB Popular"
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter7.checked === true) {
            var tempArr = dairyArr.filter(function (elem) {
                return elem.Quantity.includes("Carton");
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