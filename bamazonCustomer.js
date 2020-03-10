var mysql = require("mysql");
let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

function connectDB(productName, deptName, price) {
    connection.connect(function(err) {
        console.log('HEEEEYYYYYY');
        
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
        return createNew(productName, deptName, price);
    });

}