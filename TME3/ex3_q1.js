let button = document.getElementById('btn_ok').addEventListener('click',additionne);

function additionne(event) {    console.log(event);

    let inputs = document.getElementsByTagName('input');
    console.log("La somme est de : "+(parseInt(inputs[0].value)+parseInt(inputs[1].value)));
    if (event.shiftKey) console.log("Touche Shift cliquée");
}

