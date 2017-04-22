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


	console.log("connected");

});


//function that displays everything to the user and asks them

//for the id of the product they want to buy and how many
//units the user wants to buy 



connection.query("SELECT * FROM products", function(err, res) {

	for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " +

     res[i].department_name + " | " + res[i].product_name + " | " + res[i].price +  " | " + 
     res[i].stock_quantity  );
  }
  console.log("-----------------------------------");

});



// inquirer.prompt([{
//     name: "item",
//     type: "input",
//     message: "What is ID of the product you would like to buy?"
//   }





//end of connection.query 






// var showTable = function(){

	

// 	connection.query("SELECT * FROM auctions," function(err, results){

// 		// if (err) throw err;

// 		console.log("in the showtable function");



// 	});




// };














