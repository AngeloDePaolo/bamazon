const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "mysQ434#",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    shopping();
});


function shopping() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
        prompt(res);
    })
    
}

function prompt(data) {
    inquirer.prompt([
        {
            type: "input",
            name: "items",
            message: "What is the ID of the item you wish to purchase?"
        },
        {
            type: "input",
            name: "quantity",
            message: "How much do you want of this item?"
        }
    ]).then(function(cart) {
        // if(cart.items != "^[0-9]"){
        //     console.log("this is a number");
           for (i=0; i<data.length; i++) {
            if(data[i].item_id == cart.items){
                if(data[i].stock_quantity >= cart.quantity){
                    connection.query("UPDATE products SET stock_quantity = stock_quantity = ? WHERE item_id = ?", 
                    [cart.items, cart.quantity], 
                    function(err, res){
                        console.log("You made that purchase... now, you need more stuff!");
                        shopping();
                    })
                }else{
                    console.log("We're out of stock, check back soon!");
                    shopping();
                }
            }
        } 
        // }else{
        //     console.log("Please choose an ID for the item that you would like to purchase.");
        //     shopping();
        // }
        
    })
    
}
