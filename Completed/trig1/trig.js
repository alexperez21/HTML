var values = [];

function AddToValues(){
    let value = Number(document.getElementById('degrees').value);
    values.push(value);
    document.getElementById("values").innerHTML = values;
    return false;
}

function CreateTable(){
    let output = document.getElementById('table');
    output.innerHTML = '<tr><th>Angle</th><th>Sin &theta;</th><th>Cos &theta;</th><th>Tan &theta;</th></tr>';
    
    for(let i = 0; i < (values.length + 1); i++)
    {
        let radian = values[i] * (Math.PI/180);
        output.innerHTML = '<tr><td>' + values[i].tofixed(2) + '</td><td>' + Math.sin(radian).toFixed(2)+ '</td><td>' + Math.cos(radian).toFixed(2) + '</td><td>' + Math.tan(radian).toFixed(2) + '</td></tr>';
    } 
}