var values = [];

function AddToValues(){
    let value = Number(document.getElementById('degrees').value);
    values.push(value);
    document.getElementById("values").innerHTML = values;
    return false;
}

function CreateTable(){
    let output = document.getElementById('table');
    output.innerHTML = '<tr><th>Angle</th><th>Sin &theta;</th><th>Cos &theta;</th><th>Tan &theta;</th></tr>'; // he
    
    for(i = 0; i < (values.length); i++)
    {
        let radian = values[i] * (Math.PI/180); // calc the radians to degrees
        output.innerHTML += '<tr><td>' + values[i] + '</td><td>' + Math.sin(radian).toFixed(3)+ '</td><td>' + Math.cos(radian).toFixed(3) + '</td><td>' + Math.tan(radian).toFixed(3) + '</td></tr>';
    } 
}