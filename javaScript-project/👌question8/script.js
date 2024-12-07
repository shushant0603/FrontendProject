var input=document.querySelector("input")
var data=[
    {name:"shushant",src:"https://images.unsplash.com/photo-1678557856807-7ae6ff6893d1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harsh",src:""},
    {name:"ayush",src:""},
    {name:"shivam",src:""},
    {name:"aditya",src:""},
]

var pers="";
data.forEach(function(elem){
    pers+=`<div class="person">
                <div class="img">
                    <img src=${elem.src} alt="">
                </div>
                <h4>${elem.name}</h4>
            </div> `
})
document.querySelector('.people').innerHTML=pers;


input.addEventListener("input",function(){
    var matching =data.filter(function(e){
        return e.name.startsWith(input.value)
    });

        var newUsers="";
    matching.forEach(function(elem){
        newUsers +=`<div class="person">
                <div class="img">
                    <img src=${elem.src} alt="">
                </div>
                <h4>${elem.name}</h4>
            </div> `
    })
    document.querySelector(".people").innerHTML=newUsers;
})