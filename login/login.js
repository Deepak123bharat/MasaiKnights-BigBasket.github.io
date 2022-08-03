
// function showLoginTab(){
    
//     document.querySelector(".modal-bg").style.display="flex";
// }
// document.querySelector("#closeBtn").addEventListener("click",closepopup());

// function closepopup(){
    
   
//     document.querySelector(".modal-bg").style.display="none";
// }
function changeModal(){
    
    
    if(document.querySelector(".box").style.display==="block"){
        
        document.querySelector(".box").style.display="none";
        document.querySelector(".box-3").style.display="block";
    }
    else{
        document.querySelector(".box").style.display="block";
        document.querySelector(".box-3").style.display="none";
    }  
}

var signupData =JSON.parse(localStorage.getItem("signUpList"))  || [];



function getDetails(){
    var NAME = document.getElementById("name").value
    var EMAIL = document.getElementById("signup-email").value
    var NUMBER = document.getElementById("number").value
    var PASSWORD = document.getElementById("signup-password").value
    
    var signupObj = {
        name: NAME,
        email: EMAIL,
        number: NUMBER,
        password:PASSWORD
        }
        if(NAME=="" || EMAIL== "" || NUMBER=="" || PASSWORD== ""){
            var alert = "ENTER ALL DETAILS";
            var color = "red";
            var box = ".box";
            alertPopup(alert,color,box);
            setTimeout(closeAlertPopup,"3000");
            return;
        }
        signupData.push(signupObj);
        localStorage.setItem("signUpList",JSON.stringify(signupData));
        document.getElementById("name").value="";
        document.getElementById("signup-email").value=""
        NUMBER = document.getElementById("number").value=""
        PASSWORD = document.getElementById("signup-password").value=""
        var alert = "REGISTERED SUCESSFULLY";
        var color = "green";
        var box =".box"
        alertPopup(alert,color,box);
        
        
        setTimeout(closeAlertPopup,"3000");
    }
   
    
    function checkDetails(){
        var EMAIL =document.getElementById("login-email").value;
        var PASSWORD= document.getElementById("login-password").value;
        signupData.map(function(elem){
        if(elem.email==EMAIL && elem.password==PASSWORD){
            document.querySelector("h1").innerText=elem.name;
            closepopup();
            return;
        }
        })
        var alert = "USER NOT FOUND";
        var color = "red";
        var box=".box-3"
        alertPopup(alert,color,box);
        setTimeout(closeAlertPopup,"3000");
            
        
    }
    function alertPopup(alert,color,box){
        var sucessPopup = document.createElement("div");
            sucessPopup.setAttribute("class","signupAlert");
            var sucessH2=document.createElement("h6");
            
            sucessH2.innerText=alert;
            sucessH2.style.backgroundColor=color;
            
            sucessPopup.append(sucessH2);
            document.querySelector(box).append(sucessPopup);

    }
    
            
            function closeAlertPopup(){
                document.querySelector(".signupAlert").remove();
            }
               
                
//    document.querySelector("#closeBtn").addEventListener("click",(event)=>{
//         var parent = event.target.parentNode.parentNode
//         console.log(parent)
//         parent.style.animationName = "modalclose"
//         parent.style.animationDuration = ".5s"

//     })
