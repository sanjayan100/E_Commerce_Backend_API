This is the backend API for an e-commerce application. It provides endpoints for user authentication, product management, cart management, order processing, and more

Technologies Used

Node.js: JavaScript runtime environment

Express.js: Web application framework for Node.js

MySQL: Relational database management system

JSON Web Tokens (JWT): Securely transmit information between parties as a JSON object

Swagger: API documentation tool

Postman: API testing tool
Installation

Clone the repository: git clone https://github.com/sanjayan100/E_Commerce_Backend_API.

Navigate to the project 

directory: cd e-commerce-backend
Install dependencies: npm install

Set up environment variables:
Create a .env file in the root directory.

Add the following environment variables:

host=localhost
user=root
password=your_password
database=ecommerce_db
port=3000
SECRET_KEY=your_secret_key

Set up the MySQL database:

Create a MySQL database named ecommerce_db.
Run the SQL scripts in the database folder to create the necessary tables.

Usage

Start the server: npm start

Access the API endpoints using tools like Postman.

API Endpoints

The API provides the following endpoints:

Authentication: Register and login users to obtain authentication tokens.
Product Management: Retrieve products, add products to the cart, place orders, and view order history.
Cart Management: Add products to the cart, view cart contents, and update cart items

Order Processing: Place orders with products from the cart and view order details.
For detailed documentation of the API endpoints, refer to the Swagger documentation.

Authentication

The API uses JSON Web Tokens (JWT) for user authentication. Users can register and log in to obtain a JWT token, which must be included in the headers of protected API requests.

Error Handling

The API includes error handling middleware to provide meaningful error messages and status codes when necessary. Errors are logged to the console, and a generic error response is sent back to the client.

Testing

The API endpoints can be tested using tools like Postman. Make sure to thoroughly test each endpoint, including positive and negative scenarios, to ensure proper functionality.

Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or feature requests, please open an issue or submit a pull request.
