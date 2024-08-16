


var overlay =document.getElementById("addbut")
var popup =document.getElementById("popup")
var box =document.getElementById("popbo")
var cancle=document.getElementById("can")
var add=document.getElementById("addn")
var boo=document.getElementById("box")
var tittle=document.getElementById("tin")
var namo =document.getElementById("namain")
var note =document.getElementById("notein")

overlay.addEventListener("click",function(){ 
    box.style.display="block"
    popup.style.display="block"
  

})
cancle.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    box.style.display="none"


})
add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bal")
    div.innerHTML=`<h2>${tittle.value}</h2>
        <h5>${namo.value}</h5>
        <p>${note.value}</p>
        <button onclick='delet(event)'>Delete</button>`
   
    
    boo.append(div)
    popup.style.display="none"
    box.style.display="none"


})
function delet(event){
    event.target.parentElement.remove()

}




