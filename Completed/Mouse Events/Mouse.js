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

  //Draw something dynamically
//  for(i=3;i<100;i+=2){
//   pen.strokeStyle = "#"+ Math.floor(256*256*256*Math.random()).toString(16);
//   pen.beginPath();
//    pen.arc(c.width/2, c.height/2, i, 0, 2 * Math.PI)
//  pen.stroke();
//  }

}