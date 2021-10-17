function calcSum(){
    let inputValue = document.getElementById('inputValue').value;
    let sum = 0;
        if(inputValue > 0 && inputValue < 100){
           for(let i = 1; i <= inputValue; i++){
            sum = sum+i;
            } 
            document.getElementById("answer").innerHTML = sum;
        }   else {alert("Error");}
}

function calcTopProduct(){
    let inputValue = document.getElementById('inputValue').value;
    let product = 1;
        if(inputValue > 0 && inputValue < 100){
           for(let i = inputValue; i <= 100; i++){
            product = product * i;
            } 
            document.getElementById("answer").innerHTML = product;
        } else {alert("Error"); }        
}

function asciiSquare(){
    let inputValue = document.getElementById('inputValue').value;
    let str = "*";
        if(inputValue > 0 && inputValue < 100){
            document.getElementById("answer").innerHTML = "<br>";
            for(let i = 1; i <= inputValue; i++){
                    document.getElementById("answer").innerHTML +=  (str.repeat(inputValue) + "<br>");   
            }  
        } else {alert("Error");}        
}

function asciiTriangle(){
    let inputValue = document.getElementById('inputValue').value;
    let str = "*";
        if(inputValue > 0 && inputValue < 100){
            document.getElementById("answer").innerHTML = "<br>";
            for(let i = 1; i <= inputValue; i++){
                    document.getElementById("answer").innerHTML += (str.repeat(i) + "<br>");   
            }  
        } else {alert("Error");}        
}
function howManyTimes(){
    let inputValue = document.getElementById('inputValue').value;
    let numberoftime = 0;
    let value = 0;

    if(inputValue > 0 && inputValue < 100){
        while(value<inputValue){
            value = Math.floor(Math.random() * 100) + 1;
            numberoftime++;   
        }
        document.getElementById("answer").innerHTML = numberoftime;
    }else{alert("Error");}
}
