<?php

Class Product {
  // Database connection and table name
  private $conn;
  private $table_name = 'products';

  // Object proiperties
  public $id;
  public $name;
  public $price;
  public $description;
  public $category_id;
  public $timestamp;

  public function __construct($db) {
    $this->conn = $db;
  }

  public function create () {
    try {

      // Insert query
      $query = "INSERT INTO products
        SET name=:name, description=:description, price=:price, category_id=:category_id, created=:created";

        $stmt = $this->conn->prepare($query);

        //Sanitize HTML
        $name = htmlspecialchars(strip_tags($this->name));
        $description = htmlspecialchars(strip_tags($this->description));
        $price = htmlspecialchars(strip_tags($this->price));
        $category_id = htmlspecialchars(strip_tags($this->category_id));

        //Bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':category_id', $category_id);

        //We need the created viriable to know when the record was created
        //also, to comply with strict standards: only variable should be passed
        //by reference
        $created = date('Y-m-d H:i:s');
        $stmt->bindParam(':created', $created);

        //Execute the query
        if ($stmt->execute()) {
          return true;
        } else {
          return false;
        }

    } // Show error if any
    catch(PDO::Exception $exception) {
      die('ERROR: ' . $exception->getMessage());
    }
  }

  public function readAll() {

    // select all data p is short for products and c for categories
    $query = "SELECT p.id, p.name, p.description, p. price, c.name as category_name 
    FROM " . $this->table_name . " 
    p LEFT JOIN categories c
    ON p.category_id = c.id
    ORDER BY id DESC";
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($results);

  }

    public function readOne() {
      // select all data p is short for products and c for categories
      $query = "SELECT p.id, p.name, p.description, p. price, c.name as category_name 
      FROM " . $this->table_name . " 
      p LEFT JOIN categories c
      ON p.category_id = c.id
      WHERE p.id = :id";

      // prepare the query for execution
      $stmt = $this->conn->prepare($query);
      
      // Cheking the data and sanitize it
      $id = htmlspecialchars(strip_tags($this->id));
      $stmt->bindParam(':id', $id);

      $stmt->execute();

      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

      return json_encode($results);

    }

}