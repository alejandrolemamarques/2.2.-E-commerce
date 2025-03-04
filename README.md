# IT Academy Shop

## 📄 Description

IT Academy Shop is a modern e-commerce platform that combines sleek design with interactive functionality. The project features a responsive shopping experience with product categories, shopping cart functionality, and a secure checkout process. The design incorporates developer-themed elements, making it both functional and visually appealing for tech enthusiasts.

## 💻 Technologies Used

-   HTML5
-   CSS3
-   SASS/SCSS
-   Bootstrap 5
-   JavaScript (Vanilla)
-   Node.js (for development)

## 🛠️ Features

-   **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
-   **Product Categories**: Browse products by category (Grocery, Beauty, Clothes)
-   **Shopping Cart**: Add, remove, and manage items in your cart
-   **Quantity Management**: Increase or decrease product quantities
-   **Automatic Discounts**: Special offers applied automatically when qualifying conditions are met
-   **Form Validation**: Client-side validation for checkout information
-   **Interactive UI**: Modern interface with hover effects and smooth transitions
-   **Easter Egg**: Hidden Chrome Dino game for when you're shopping

## 📋 Requirements

-   Node.js (for SASS compilation and package management)
-   NPM (for dependency management)

## 🚀 Installation

1. Clone this repository:

    ```sh
    git clone https://github.com/alejandrolemamarques/S2.2.-E-commerce.git
    ```

2. Navigate to the project directory:

    ```sh
    cd IT-Academy-Shop
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

## ▶️ Running the Project

1. Open `index.html` in your browser to view the shop.
2. To compile SASS changes during development:
    ```sh
    npx sass --watch css/custom-styles.scss:css/custom-styles.css
    ```

## 🏗️ Project Structure

-   `index.html` - Main shop page with product listings
-   `checkout.html` - Checkout page for completing orders
-   `css/` - Contains all styling files
    -   `custom-styles.scss` - Main SASS file with custom styling
    -   `custom-styles.css` - Compiled CSS from SASS
-   `js/` - JavaScript files
    -   `shop.js` - Main functionality for the shop (cart management, product display)
    -   `checkout.js` - Form validation and checkout process
-   `images/` - Product and UI images
-   `dino/` - Chrome Dino game easter egg

## 🛒 Shopping Cart Functionality

The shopping cart system includes the following features:

-   Add products to cart
-   Remove products from cart
-   Increase/decrease product quantities
-   Automatic calculation of subtotals
-   Special offers and discounts
-   Persistent cart data (stays between page refreshes)

## 🔐 Checkout Process

The checkout form includes validation for:

-   Name and Last Name (letters only, minimum 3 characters)
-   Email (valid format with @ symbol)
-   Password (4-8 characters, must include letters and numbers)
-   Address (minimum 3 characters)
-   Phone Number (9 digits, numbers only)

## 💅 Styling and Design

The project uses SASS for styling with:

-   Custom variables for consistent theming
-   Nested rules for better organization
-   Mixins for reusable style patterns
-   Developer-themed design elements (code snippets, tech references)
-   Bootstrap overrides for customized components

## 🧪 Testing

To test the application:

1. Add products to your cart from different categories
2. Test the quantity increase/decrease functionality
3. Verify that special offers are applied correctly
4. Complete the checkout form with both valid and invalid data to test validation
5. Test responsiveness on different screen sizes

## 🤝 Contributing

Contributions to improve the project are welcome! Follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add feature: description"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.