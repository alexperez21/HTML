// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector9('.grocery-form');
const grocery = document.querySelector('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector9('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        const element = document.createElement('article');
        //class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id')
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
            <button class="edit-btn" type="button">
                <i class="fas faedit"></i>
            </button>
            <button class="delete-btn" type="button">
                <i class="fas fa-trash"></i>
            </button>
            </div>`;
            // append child to the article
        list.appendChild(element);
        //display alert
        displayAlert('item added to the list', 'success');
        //show container
        container.classList.add("show-container");
        //add to local storage
        addToLocalStorage(id, value);
        //back to default
        setBacktoDefault();
    } else if (value && editFlag) {

    } else {
        displayAlert("please enter value", "danger");
    }
}
//display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //Set timeout
    setTimeout(function(){
        alert.textContent = " ";
        alert.classList.add(`alert-${action}`);
    }, 4000)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
