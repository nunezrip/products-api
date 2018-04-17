<?php

// Actual endpoint

//Include core configuration
include_once('../config/core.php');

// include database connection
include_once('../config/database.php');

// Product object
include_once('../objects/product.php'); 

// Class instance
$database = new Database(;
$db = $database->getConnection();
$product = new Product($db);

// Read all the products
$product->id = $_POST['prod_id'];
$results = $product->readOne();

// Output in json format
echo $results;