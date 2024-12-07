// jab bhi forms ke saath deal kro toh ek baat yaad rkho ki page reload na ho warna js chlega hi nhi .using preventDefault() method
// var inps1=document.querySelector("#one");
// var inps2=document.querySelector("#two");
var inps=document.querySelectorAll(`input[type="text"]`);
var form=document.querySelector("form");

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log(inps1.value, inps2.value);
//     if(inps1.value=="" || inps2.value==""){
//         // alert("Please fill the input fields");
//         document.querySelector("h4").textContent="kuch likh de bhai";
//         document.querySelector("h4").style.color="red";
//     }
//     else{
//         document.querySelector("h4").textContent="";
//     }
// })

form.addEventListener("submit",function(e){
    e.preventDefault();
  for(var i=0;i<inps.length;i++){
        if(inps[i].value===""){
            document.querySelector("h4").textContent="kuch likh de bhai";
            document.querySelector("h4").style.color="red";
            break;
        }
        else{
            document.querySelector("h4").textContent="";
        }
  }
})