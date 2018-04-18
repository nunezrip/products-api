<?php

//-----Actual endpoint------//

//Include core configuration
include_once('../config/core.php');

// include database connection
include_once('../config/database.php');

// Product object
include_once('../objects/category.php'); 

// Class instance
$database = new Database();
$db = $database->getConnection();
$category = new Category($db);

// Read all the categories
$results = $category->readAll();

// Output in json format
echo $results;