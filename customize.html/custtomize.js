const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allitems= document.getElementById("allitems");
const userinput= document.getElementById("userinput");

pencil.addEventListener("click",function(){
    allitems.innerHTML=  "";
})
userinput.addEventListener("keydown",function(event){
if(event.key == "Enter")
additems();
})
function additems(){
    var h2= document.createElement("h2");
    h2.innerHTML ="- "+userinput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    allitems.insertAdjacentHTML("beforeend",h2);
    userinput.value= "";
}