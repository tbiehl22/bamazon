var mysql = require("mysql");
var inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    displayProducts();
  });

  var displayProducts = function() {
	var query = "Select * FROM products";
	connection.query(query, function(err, res) {

		if (err) throw err;

		for (var i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].item_id + " || Product Name: " +
						res[i].product_name + " || Price: " + res[i].price);
		}

  		requestProduct();
	});
};

var requestProduct = function() {
	inquirer.prompt([{
		name: "productID",
		type: "input",
		message: "Please enter product ID for the product you want to purchase:",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false;
		}
	}, {
		name: "productUnits",
		type: "input",
		message: "How many do you want?",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false
		}
	}]).then(function(answer) {

		var query = "SELECT stock_quantity, price, product_name, department_name FROM products WHERE ?";
		connection.query(query, { item_id: answer.productID}, function(err, res) {
			
			if (err) throw err;

			var available_stock = res[0].stock_quantity;
			var price_per_unit = res[0].price;
			var productSales = res[0].product_name;
			var productDepartment = res[0].department_name;

			if (available_stock >= answer.productUnits) {

				completePurchase(available_stock, price_per_unit, productSales, productDepartment, answer.productID, answer.productUnits);
			} else {

				console.log("There isn't enough in stock!");

				requestProduct();
			}
		});
	});
};

var completePurchase = function(availableStock, price, productSales, productDepartment, selectedProductID, selectedProductUnits) {
	
	var updatedStockQuantity = availableStock - selectedProductUnits;

	var totalPrice = price * selectedProductUnits;

	var updatedProductSales = parseInt(productSales) + parseInt(totalPrice);

	var query = "UPDATE products SET ? WHERE ?";
	connection.query(query, [{
		stock_quantity: updatedStockQuantity,
		
	}, {
		item_id: selectedProductID
	}], function(err, res) {

		if (err) throw err;
		console.log("Your purchase is complete.");
        console.log("Your payment has been received in the amount of : " + totalPrice);
        
        displayProducts();
	});
};
