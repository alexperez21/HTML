function CalcConcrete(){
    let concrete = Number(document.getElementById('concrete').value);
    let ratio = Number(document.getElementById('ratio').value);
    let cement = Number(document.getElementById('cementAvail').value);
    let aggregate = Number(document.getElementById('aggregate').value);

    let output = Number(((ratio*cement)+((1-ratio)*aggregate)));
    document.getElementById("answer").innerHTML = "You could produce" + output + "cubic meters of concrete. This is enough to supply the " + concrete + " cubic meters you need";
}