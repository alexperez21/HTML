function SelectOrder(){
    let output = document.getElementById('menu');
    output.innerHTML = "<p>How many pizzas <select name='numofpizzas' id='numofpizzas'required><option value='one'>One</option><option value='two'>Two</option><option value='three'>Three</option><option value='four'>Four</option></select>" + 
    " Select Pizza Size <select name='pizzasize' id='pizzasize'required><option value='small'>Small</option><option value='medium'>Medium</option><option value='large'>Large</option><option value='familysize'>FamilySize</option></select>" + 
    " Select extra cheese <select name='extraCheese' id='exraCheese'><option value='none'>None</option><option value='feta'>Feta</option><option value='Chevra'>Chevra</option><option value='Extra Mozzerella'>Extra Mozzerella<option></select>" +
    " Select toping 1 <select name='Toping1' id='Toping1'><option value='none'>None</option><option value='Pepperoni'>Pepperoni</option><option value='Italian Sausage'>Italian Sausage</option><option value='Lamb Sausage'>Lamb Sausage</option><option value='Olivers'>Olivers</option><option value='Shrooms'>Shrooms</option><option value='Garlic'>Garlic</option><option value='Beef'>Beef</option><option value='Chicken'>Chicken</option><option value='Ham'>Ham</option></select>" +
    " Select toping 2 <select name='Toping2' id='Toping2'><option value='none'>None</option><option value='Pepperoni'>Pepperoni</option><option value='Italian Sausage'>Italian Sausage</option><option value='Lamb Sausage'>Lamb Sausage</option><option value='Olivers'>Olivers</option><option value='Shrooms'>Shrooms</option><option value='Garlic'>Garlic</option><option value='Beef'>Beef</option><option value='Chicken'>Chicken</option><option value='Ham'>Ham</option></select>" + 
    " Select toping 3 <select name='Toping3' id='Toping3'><option value='none'>None</option><option value='Pepperoni'>Pepperoni</option><option value='Italian Sausage'>Italian Sausage</option><option value='Lamb Sausage'>Lamb Sausage</option><option value='Olivers'>Olivers</option><option value='Shrooms'>Shrooms</option><option value='Garlic'>Garlic</option><option value='Beef'>Beef</option><option value='Chicken'>Chicken</option><option value='Ham'>Ham</option></select></p>";

    document.getElementById('place order').innerHTML = "<p><button onclick = 'Placeorder();'>Place Order</button> </p>"
}

function Placeorder(){

}