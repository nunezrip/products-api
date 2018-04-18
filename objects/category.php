<?php

Class Category {
  // Database connection and table name
  private $conn;
  private $table_name = 'categories';

  // Object properties
  public $id;
  public $name;
  public $description;
  public $timestamp;

  public function __construct($db) {
    $this->conn = $db;
  }

  public function create () {
    try {

      // Insert query
      $query = "INSERT INTO categories
        SET name=:name, description=:description, created=:created";

        //Prepare staement
        $stmt = $this->conn->prepare($query);

        //Sanitize HTML
        $name = htmlspecialchars(strip_tags($this->name));
        $description = htmlspecialchars(strip_tags($this->description));

        //Bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);

        //We need the created variable to know when the record was created
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
    catch(PDOException $exception) {
      die('ERROR: ' . $exception->getMessage());
    }
  }

  public function readAll() {

    // Select all data p is short for products and c for categories
    $query = "SELECT c.description, c.name as category_name 
    FROM " . $this->table_name . " 
    ORDER BY id DESC";
    
    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($results);

  }

    public function readOne() {
      // select all data c for categories
      $query = "SELECT c.description, c.name as category_name 
      FROM " . $this->table_name . " 
      p LEFT JOIN categories c
      ON c.description = c.id
      WHERE c.id = :id";

      // prepare the query for execution
      $stmt = $this->conn->prepare($query);
      
      // Cheking the data and sanitize it
      $id = htmlspecialchars(strip_tags($this->id));
      $stmt->bindParam(':id', $id);

      $stmt->execute();

      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

      return json_encode($results);

    }

  public function update() {

    //Update product based on id
    $query = "UPDATE products
                SET name=:name, description=:description, created=:created
                WHERE id=:id";
    
    //Prepare statement
    $stmt = $this->conn->prepare($query);

    //Sanitize HTML
    $name = htmlspecialchars(strip_tags($this->name));
    $description = htmlspecialchars(strip_tags($this->description));

    //Bind the parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':id', $id);

    //Execute the query
    if ($stmt->execute()) {
      return true;
    } else {
      return false;
    }
  }

  public function delete($id) {

      //Make query to the record from the db
      $query = "DELETE FROM products WHERE id=:id";

      $stmt = $this->conn->prepare($query);

      //Sanitize
      $id = htmlspecialchars(strip_tags($id));

      //Bind parameter
      $stmt->bindParam(':id', $id);

      if ($stmt->execute()) {
        return true;
      } else {
        return false;
      }
  }

}