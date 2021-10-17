function mix(){
    let red = Number(document.getElementById('rednumber').value);
    let rn = ((red < 16)? "0" + red.toString(16): red.toString(16)).toUpperCase();
    let green = Number(document.getElementById('greennumber').value);
    let gn = ((red < 16)? "0" + green.toString(16): green.toString(16)).toUpperCase();
    let blue = Number(document.getElementById('bluenumber').value);
    let bn = ((red < 16)? "0" + blue.toString(16): blue.toString(16)).toUpperCase();

    let answer = document.getElementById('answer');
    if(red > 255 || green > 255 || blue > 255){
        answer.textContent = "Hex code: Not a legal color. TRY AGAIN";
    } else {
        document.getElementById("outputbox").style.backgroundColor = '#'+(rn+gn+bn);
        document.getElementById("answer").innerHTML = rn+gn+bn;
    }
}