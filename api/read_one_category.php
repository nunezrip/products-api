<?php

// Actual endpoint

//Include core configuration
include_once('../config/core.php');

// Include database connection
include_once('../config/database.php');

// Category object
include_once('../objects/category.php'); 

// Class instance
$database = new Database();
$db = $database->getConnection();
$category = new Category($db);

// Read one the category
$category->id = $_POST['prod_id'];
$results = $category->readOne();

// Output in json format
echo $results;