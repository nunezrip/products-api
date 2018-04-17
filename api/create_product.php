<?php

// If the form was submitted
if ($_POST) {

//-----Actual endpoint------//

//Include core configuration
include_once('../config/core.php');

// Include database connection
include_once('../config/database.php');

// Product object
include_once('../objects/product.php'); 

// Class instance
$database = new Database(;
$db = $database->getConnection();
$product = new Product($db);

// Set product property values

$product->name = $_POST['name'];
$product->price = $_POST['price'];
$product->description = $_POST['description'];
$product->category_id = $_POST['category_id'];

// Create the product
echo $product->create() ? "true" : "false";

}