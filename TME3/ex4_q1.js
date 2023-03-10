document.getElementById('btn_add').addEventListener('click',addTextInList);
document.getElementById('btn_supp').addEventListener('click',function(){
    let liste = document.getElementById("listecommissions");
    if(liste.lastElementChild) liste.removeChild(liste.lastElementChild);
});

function addTextInList(event) {   
    let newLi=document.createElement("li");
    let newText = document.createTextNode("txte");
    newLi.appendChild(newText);
    document.getElementById("listecommissions").appendChild(newLi);
}

