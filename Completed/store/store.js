class Item {
    constructor(name = '', cost = 0, imagename = ' '){
        this.name = name;
        this.cost = cost;
        this.imagename = imagename;
        }
    }

    let array = [
        new Item('Chocolate Minis', 10, 'candy1'),
        new Item('Jolly Ranchers', 8.50, 'candy2'),
        new Item('Air Heads', 12.50, 'candy3'),
        new Item('Mike and Ikes', 6.50, 'candy4'),
        new Item('Sour Patch', 4.50, 'candy5'),
        ];

    function ShowTable(){
        let output = document.getElementById('table');
        output.innerHTML = '<tr><th>Item</th><th>Price</th><th>Image</th><th>Quantity</th></tr>';

        for(i = 0; i < array.length; i++){
            output.innerHTML += "<tr><td>" + array[i].name + "</td><td>$" + array[i].cost.toFixed(2) + "</td><td> <img src = 'candyImages/" + 
            array[i].imagename + ".jpg'></td><td><input type ='text' value = '0' class = 'quant' id = 'quant'/></td></tr>";
        }
    }
    
    function Calccost(){
        let quants = document.getElementById('quant');
        let totalcost= 0;

        for(i = 0; i <quants.length; i++){
            totalcost += quants[i].value * array[i].cost;
        }

        document.getElementById('cost').innerHTML = 'Total cost is $' + totalcost;
    }
