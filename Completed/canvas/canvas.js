function init()
{
  let c = document.getElementById("surface");
  let pen = c.getContext("2d");

  //Draw something dynamically
 for(i=3;i<100;i+=2){
    pen.strokeStyle = "#"+ Math.floor(256*256*256*Math.random()).toString(16);
    pen.beginPath();
    pen.arc(c.width/2, c.height/2, i, 0, 2 * Math.PI)
    pen.stroke();

 for(i=0;i<=600;i+=10){
    pen.strokeStyle = "yellow";
    pen.beginPath();
    pen.moveTo(i,600);
    pen.lineTo(600,600-i);
    pen.stroke();
  }

  for(i=0;i<=600;i+=10){
    pen.beginPath();
    pen.strokeStyle = "red";
    pen.moveTo(i,0);
    pen.lineTo(0,600-i);
    pen.stroke();
  }

  for(i=0;i<=600;i+=10){
    pen.beginPath();
    pen.strokeStyle = "blue";
    pen.moveTo(0, i);
    pen.lineTo(i,600);
    pen.stroke();
  }

  for(i=0;i<=600;i+=10){
    pen.beginPath();
    pen.strokeStyle = "green";
    pen.moveTo(600,i);
    pen.lineTo(i,0);
    pen.stroke();
  }
}
}