var values = [];

function AddToValues(){
    let value = Number(document.getElementById('degrees').value);
    values.push(value);
    document.getElementById("values").innerHTML = values;
    return false;
}

function CreateTable(){
    
}