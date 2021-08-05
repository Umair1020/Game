let addtodobutton = document.getElementById("addtodo")
let todocontainer = document.getElementById("toDocontainer")
let inputField = document.getElementById("inputfield")

addtodobutton.addEventListener("click",function(){
var paragraph = document.createElement('p')
paragraph.innerText = inputField.value;
todocontainer.appendChild(paragraph)
inputField.value = "";
paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration = "line-through";
})
paragraph.addEventListener("dblclick", function(){
   todocontainer.removechild(paragraph);
})
})
