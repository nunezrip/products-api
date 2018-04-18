<?php

// If the form was submitted
if ($_POST) {

//-----Actual endpoint------//

//Include core configuration
include_once('../config/core.php');

// Include database connection
include_once('../config/database.php');

// Product object
include_once('../objects/category.php'); 

// Class instance
$database = new Database(;
$db = $database->getConnection();
$category = new Category($db);

// Set category property values

$category->name = $_POST['name'];
$category->description = $_POST['description'];
$category->category_id = $_POST['category_id'];

// Create the category
echo $category->create() ? "true" : "false";

}