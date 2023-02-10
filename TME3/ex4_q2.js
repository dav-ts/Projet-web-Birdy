document.getElementById('btn_2vers1').addEventListener('click',deplace);
document.getElementById('btn_1vers2').addEventListener('click',deplace);

function deplace(event){
    switch (event.target.id){
        case "btn_1vers2":
            document.getElementById('liste2').appendChild(document.getElementById('liste1').firstElementChild);
        break;
        case "btn_2vers1":    
            document.getElementById('liste1').appendChild(document.getElementById('liste2').firstElementChild);   
        break;
    }
}