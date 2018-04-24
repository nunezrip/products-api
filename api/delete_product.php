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
$database = new Database();
$db = $database->getConnection();
$product = new Product($db);

$id  = $_DELETE['del_id'];

echo $product->delete($id) ? "true" : "false";

}