function calcBMI ()
{
  //Example of an if statement
  //Define the input and output elements from the webpage
  let putAnswer = document.getElementById('calculatedBMI');
  let putHealthMessage = document.getElementById('healthMessage');

  //get the weight and height values from the elements
  let weightInput = document.getElementById('inputWeight').value;
  let heightInput = document.getElementById('inputHeight').value;

  if(weightInput > 200 || (weightInput < 10 && weightInput > 0)){
    alert("Suspicious Weight");
  } else if (heightInput > 3 || (heightInput < 0.5 && heightInput > 0)) {
      alert("Suspicious height");
  }
  //Calculate the BMI (but only if heigh and weight are positive)
  if(heightInput > 0 && weightInput > 0){
    putAnswer = (weightInput/(heightInput**2)).toFixed(2);
    //Report it to the webpage
    document.getElementById("calculatedBMI").innerHTML = putAnswer;
  } else {
    alert("Cannot calculate BMI becuause values are negitive");
  }
  //Report a health message based on BMI
  if(putAnswer < 18.5){
    putHealthMessage.textContent = "BMI is lower than Average";
  } else if (putAnswer > 18.5 && putAnswer <25){
    putHealthMessage.textContent = "BMI is normal";
  } else if (putAnswer > 25 && putAnswer < 30){
    putHealthMessage.textContent = "BMI is higher than average";
  } else {
    putHealthMessage.textContent = "BMI is too high";
  }
}
/*
If you finish early, please create a conversion program to convert from feet to meters and from pounds to kilograms. This should be at the bottom of the BMI page and has a separate functionality.

Also consider using CSS to style the page. Can you change the background color based on the calculation? Use color instead of the alert to indicate if there is an issue with the input data?
*/
