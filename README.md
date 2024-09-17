# **Shopping Cart Web Application**

Welcome to the **Shopping Cart Web Application**. This project demonstrates an interactive and responsive shopping platform where users can browse products, add them to a cart, and apply various filters for a better shopping experience. Built using React.js, it is designed to provide a seamless user interface with essential e-commerce functionalities.

## **Features**

- **Product Sorting**: 
  - Sort products by price in **ascending** or **descending** order.
  
- **Filtering Options**:
  - **Include Out of Stock**: Toggle the display of products that are out of stock.
  - **Fast Delivery**: View only products that offer fast delivery.
  - **Rating Filter**: Filter products by rating to ensure you find the best options.

- **Cart Management**:
  - Add products to the cart.
  - Remove products from the cart.
  - Adjust the quantity of products in the cart.

- **Clear Filters**: One-click option to clear all applied filters.

## **Tech Stack**

- **Frontend**: React.js, React Bootstrap
- **State Management**: React `useReducer` hook
- **Styling**: CSS, Bootstrap
- **Mock Data**: Faker.js for generating random product data

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shopping-cart-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## **Usage**

1. Browse the products on the home page.
2. Use the filter section to:
   - Sort products by price.
   - Toggle stock availability.
   - View only fast delivery products.
   - Filter by rating.
3. Add products to your cart and adjust the quantities as needed.


## **Project Structure**

```bash
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Filters.js
│   │   ├── Rating.js
│   │   └── SingleProduct.js
│   ├── context
│   │   ├── Context.js
│   │   └── Reducer.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## **Future Improvements**

- Implement a backend to handle product data, authentication, and order management.
- Add search functionality for products.
- Introduce more advanced filtering options, such as price range sliders.

