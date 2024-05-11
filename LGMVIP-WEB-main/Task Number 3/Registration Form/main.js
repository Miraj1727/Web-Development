var form=document.getElementById("form");
var submit = document.querySelector(".submit");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event){
    i=URL.createObjectURL(event.target.files[0]);
}

function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var id = document.createElement("div");
    var Email = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML="Name: "+element[0].value;
    id.innerHTML="ID Number: "+element[1].value;
    Email.innerHTML="Email: "+element[2].value;
    img.alt="student image";
    if(element[3].value !=""){
        img.src=i;
    }

    if(element[4].checked){skills.innerHTML="SKILLS: Javascript";}
    if(element[5].checked){skills.innerHTML="SKILLS: C";}
    if(element[6].checked){skills.innerHTML="SKILLS: PHP";}
    if(element[4].checked && element[5].checked){skills.innerHTML="SKILLS: Javascript, C";}
    if(element[4].checked && element[6].checked){skills.innerHTML="SKILLS: Javascript, PHP";}
    if(element[5].checked && element[6].checked){skills.innerHTML="SKILLS: C, PHP";}
    if(element[4].checked && element[5].checked && element[6].checked){skills.innerHTML="SKILLS: Javascript, C, PHP";}

    div1.appendChild(name);
    div1.appendChild(id);
    div1.appendChild(Email);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
    
}