CREATE DATABASE Bamazon; 

USE Bamazon;

CREATE TABLE 
	products (
      item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
      product_name VARCHAR(50) NOT NULL,
      department_name VARCHAR(50),
      price INTEGER(11),
      stock_quantity INTEGER(11),
      PRIMARY KEY (item_id)	
            
    );
    INSERT INTO products (

	product_name,
    department_name,
    price,
    stock_quantity 
    ) 
    
    VALUES
    
		(
        "red scarf",
        "Clothing - Women",
        45.00,
        60
        
    );
    
        	(
		"yellow scarf",
        "Clothing - Women",
        45.00,
        60
        
    );
    
    
    	(
		"blue scarf",
        "Clothing - Women",
        42.00,
        960
        
    );
    
    
    
    
		(
		"pink scarf",
        "Clothing - Women",
        39.00,
        800
        
    );
    
    
    
       
    
    

    
               (
		"cotton scarf",
        "Clothing - Women",
        30.00,
        900
        
    );
    
    
    
    
    
            (
		"wool scarf",
        "Clothing - Women",
        30.00,
        900
        
    );
    
    
    
    
    
    
     
        (
		"wool hat",
        "Clothing - Women",
        25.00,
        700
        
    );
        
    
    
    
    
    
        (
		"soft socks",
        "Clothing - Women",
        6.00,
        500
        
    );
    
    
 

        (
		"fuzzy socks",
        "Clothing - Women",
        5.00,
        500
        
    );

SELECT * FROM products;