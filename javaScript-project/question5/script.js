var btn1=document.querySelector("#start");
var btn2=document.querySelector("#stop");
var h3=document.querySelector("h3");
var int;

btn1.addEventListener("click",function(){
 var count=0;
  int=setInterval(function(){
    count++;
    h3.textContent=count;
 },1000);
})
btn2.addEventListener("click",function(){
     clearInterval(int);
    
})

