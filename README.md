<h1>BAMAZON!</h1>

In this activity, an Amazon-like storefront is created. The app wtakes in orders from customers and depletes stock from the store's inventory. 

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. 

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, the application should check if the store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if the store _does_ have enough of the product, the customer's order is fulfilled.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

<h1>Screenshots</h1>

HP@LAPTOP-4PIR1OO8 MINGW64 ~/OneDrive/desktop/Homework/bamazon (master)
$ node bamazonCustomer.js
Product ID: 1 || Product Name: Running shoes || Price: 130.00
Product ID: 2 || Product Name: T-shirt || Price: 10.00
Product ID: 3 || Product Name: Lysol || Price: 5.00
Product ID: 4 || Product Name: Waterbottle || Price: 20.00
Product ID: 5 || Product Name: 60' TV || Price: 500.00
Product ID: 6 || Product Name: Laptop || Price: 800.00
Product ID: 7 || Product Name: Diapers || Price: 40.00
Product ID: 8 || Product Name: Paper Towels || Price: 15.00
Product ID: 9 || Product Name: Light Bulbs || Price: 8.00
Product ID: 10 || Product Name: Towels || Price: 15.00
Product ID: 11 || Product Name: Kleenex Tissues || Price: 6.00
Product ID: 12 || Product Name: Candy Bar || Price: 1.00
Product ID: 13 || Product Name: Toilet Paper || Price: 8.00
? Please enter product ID for the product you want to purchase:
