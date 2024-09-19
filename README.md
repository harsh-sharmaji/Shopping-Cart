Shopping Cart Web Application
Welcome to the Shopping Cart Web Application. This project demonstrates an interactive and responsive shopping platform where users can browse products, add them to a cart, and apply various filters for a better shopping experience. Built using React.js, it is designed to provide a seamless user interface with essential e-commerce functionalities.

Features
Product Sorting:

Sort products by price in ascending or descending order.
Filtering Options:

Include Out of Stock: Toggle the display of products that are out of stock.
Fast Delivery: View only products that offer fast delivery.
Rating Filter: Filter products by rating to ensure you find the best options.
Cart Management:

Add products to the cart.
Remove products from the cart.
Adjust the quantity of products in the cart.
Product Detail View:

View detailed information and images of each product by clicking on it.
Barcode Scanner:

Scan barcodes to search for products (integration is partially complete and under fine-tuning).
Clear Filters: One-click option to clear all applied filters.

Tech Stack
Frontend: React.js, React Bootstrap
State Management: React useReducer hook
Styling: CSS, Bootstrap
Mock Data: Faker.js for generating random product data
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
Navigate to the project directory:

bash
Copy code
cd shopping-cart-app
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Usage
Browse the products on the home page.
Use the filter section to:
Sort products by price.
Toggle stock availability.
View only fast delivery products.
Filter by rating.
Click on a product to view its detailed information.
Use the barcode scanner to search for products (note that this feature is still being refined).
Add products to your cart and adjust the quantities as needed.
Project Structure
bash
Copy code
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Filters.js
│   │   ├── Rating.js
│   │   ├── SingleProduct.js
│   │   ├── ProductDetail.js
│   │   └── BarcodeScanner.js
│   ├── context
│   │   ├── Context.js
│   │   └── Reducer.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
Future Improvements
Implement a backend to handle product data, authentication, and order management.
Add search functionality for products.
Introduce more advanced filtering options, such as price range sliders.
Further refine the barcode scanner integration.
