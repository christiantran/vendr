function Vendr(){
var currentBalance = 0
var products = [{
    name: 'Mt. Dew',
    price: .75,
    stock: 17
},
{
    name: 'Flaming Hot Cheetos',
    price: 1.75,
    stock: 2
}];

//if array.length always have array[i] and singular version next to var
function drawProducts(){
    var template = ''
    for (let i = 0; i < products.length; i++){
        var product = products[i]; // do something to every single product
        template += `<button onclick="electedProduct(${i})" >${product.name} - $${product.price}
        </button>`
    }
    document.getElementById("buttons-container").innerHTML = template;
}

function selectedProduct(index) {
    /* what are my problems?
        button clicked --> get product --> instock --> no? tell user (msg, color) --> 
        yes? money amount --> not enough? tell user --> enough? vend (decrease stock) --> 
        change needed? --> no? tell user --> yes? dispense change --> tell user
    */

    //product instock
   var product = getProduct(index)
   if(product.stock <= 0){
       return displayMessage("Sorry out of stock, Select Again...", "red")
   }

   //sufficient funds
   if(currentBalance < product.price){
       return displayMessage("Insufficient Funds", "red")
   }

   //decrease stock
   vend(product) 
   if(currentBalance > 0){
        makeChange(currentBalance);
        return displayMessage("Have a nice day... Don't forget your change", "green");
    }
    displayMessage("Have a nice day", "green");
}

function getProduct(index){ 
    return products[index]
}

function displayMessage(msg, color){
    var msgElem = document.getElementById('msg-output').textContent = msg
    msgElem.textContent = msg;
    msgElem.style.color = color;
}

function vend(product){
product.stock -- ;
currentBalance -= product.price;
//TODO: display product
}

function makeChange(balance){
currentBalance -= balance
if(currentBalance !== 0){
    console.log("UGH something bad just occured")
}
//dispense change
}

this.handleProductButton = function handleProductButton(index){
    var product = getProduct(index);
    //product in stock
    if(product.stock <= 0) {
        return displayMessage("Sorry out of stock. Select Again...", "red");
    }
}

var moneyTypes = {
    quarter: .25,
    nickle: .05,
    dime: .10,
    dollar: 1,
}

this.addMoney = function addMoney(type){
    var value = moneyTypes[type]
    if(value){
        currentBalance += value
    }
    displayMessage(`&&{currentBalance}`, 'green')
}

drawProducts();

}

var vendr = new Vendr();