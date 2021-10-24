//challenge 1:
function ageInDays(){
    var birthYear = prompt("What year were you born in?");
    var ageIndayss = (2021- birthYear) * 365; 
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDays + 'days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementsById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
    return false;
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdomestic-cat&psig=AOvVaw1aMUSf4n1VFdcDQ1iFdKLA&ust=1635187627523000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDE0N_a4_MCFQAAAAAdAAAAABAD";
    div.appendChild(image);
}
