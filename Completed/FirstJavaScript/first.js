function changeFontsize()
{
    let h = document.getElementById('fontchange');
    h.style.fontSize = randomInteger(6,48) + "px";
}

function randomInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcHeight()
{
    let h = document.getElementById('height').value;
    document.getElementById('outputcm').innerHTML = h*2.5;
}