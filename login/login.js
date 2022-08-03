
function showLoginTab(){
    document.querySelector(".modal-bg").style.display="flex";
}
document.querySelector("#closeBtn").addEventListener("click",closepopup());

function closepopup(){
    

    document.querySelector(".modal-bg").style.display="none";
}
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
        if(signupObj.number.length<10){
            alert("Number Not Valid");
            return;
        }
        signupData.push(signupObj);
        localStorage.setItem("signUpList",JSON.stringify(signupData));
        document.getElementById("name").value="";
        document.getElementById("signup-email").value=""
        NUMBER = document.getElementById("number").value=""
        PASSWORD = document.getElementById("signup-password").value=""
    }
    function checkDetails(){
        var EMAIL =document.getElementById("login-email").value;
        var PASSWORD= document.getElementById("login-password").value;
        signupData.map(function(elem){
        if(elem.email==EMAIL && elem.password==PASSWORD){
            document.querySelector("h1").innerText=elem.name;
            closepopup();
        }
        })
    }
//    document.querySelector("#closeBtn").addEventListener("click",(event)=>{
//         var parent = event.target.parentNode.parentNode
//         console.log(parent)
//         parent.style.animationName = "modalclose"
//         parent.style.animationDuration = ".5s"

//     })
