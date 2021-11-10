
function init()
{
  let c = document.getElementById("surface");
   let pen = c.getContext("2d");

  c.addEventListener("click", function (e){
    let shapeSizeX = Math.floor(Math.random() * 100);
    let shapeSizeY = Math.floor(Math.random() * 120);
    let colorNum = Math.floor(Math.random() * 256);
    let colorNum2 = Math.floor(Math.random() * 256);
    pen.fillStyle = "rgba(" + colorNum2 + "," + colorNum + "," + colorNum2 + ", 50)";
    pen.fillRect(e.offsetX-50, e.offsetY-50, shapeSizeX, shapeSizeY);
  });

  c.addEventListener("mousemove", function (e){
    let colorNum = Math.floor(Math.random() * 256);
    pen.fillStyle = "rgba(" + colorNum + ", 105, 0.1, .3)";
    pen.fillRect(e.offsetX-5, e.offsetY-5, 20, 10);
  });

} 

function drawSquare(color){
  let c = document.getElementById("surface");
  let pen = c.getContext("2d");

    var x= Math.floor(Math.random()*512);
    var y= Math.floor(Math.random()*512);
    pen.beginPath();
    pen.fillStyle = color;
    pen.fillRect (x,y, 100, 100);
 }
