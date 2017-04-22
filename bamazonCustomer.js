var mysql = require("mysql");
var inquirer = require("inquirer");

//creating the connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysqlpa55",
    database: "Bamazon"


});

//connecting to mySQL 
connection.connect(function(err) {

    if (err) throw err;

});
// console.log("connected");

// function which shows the table and prompts the user for what product they want to buy
var start = function() {


    connection.query("SELECT * FROM products", function(err, res) {

        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " +

                res[i].department_name + " | " + res[i].product_name + " | " + res[i].price + " | " +
                res[i].stock_quantity);
        }
        console.log("-----------------------------------");

        inquirer.prompt([{
                name: "item",
                type: "input",
                message: "What is the ID of the product you would like to buy?"

            },
            {
                name: "count",
                type: "input",
                message: "How many of the product would you like?"
            }
        ]).then(function(answer) {

            // console.log(answer);
            // console.log(res);

            // console.log("answer item is " + answer.item);

            for (var i = 0; i < res.length; i++) {

                if (parseInt(res[i].item_id) === parseInt(answer.item)) {

                    // console.log("the response item number is " + res[i].item_id);

                    var location = parseInt(res[i].item_id);

                    // console.log("location is " + location);

                    var quantinStock = (parseInt(res[(location - 1)].stock_quantity));

                    var quantReq = parseInt(answer.count);

                    var updQuantinStock = quantinStock - quantReq;

                    // console.log("quantity in stock " + quantinStock);

                    // console.log("quantity requested " + quantReq);

                    // console.log("updated quantity amount " + updQuantinStock);

                    var priceOfItem = (parseInt(res[i].price) * quantReq);

                    // var totalPrice = priceOfItem * quantReq;

                    if (quantinStock >= quantReq) {

                        connection.query("UPDATE products SET ? WHERE ?", [{
                            stock_quantity: updQuantinStock
                        }, {
                            item_id: (location)
                        }], function(error) {
                            if (error) throw err;

                            console.log("You owe: $" + priceOfItem);

                        });

                        displayUpdatedtable();

                    } else {

                        console.log("Insufficient quantity!");
                    }

                }
            }


        });
    });
};

var displayUpdatedtable = function() {
    connection.query("SELECT * FROM products", function(err, res) {

        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " +

                res[i].department_name + " | " + res[i].product_name + " | " + res[i].price + " | " +
                res[i].stock_quantity);
        }
        console.log("-----------------------------------");
    });

}
start();