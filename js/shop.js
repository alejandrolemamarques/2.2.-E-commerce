// Load products from JSON file
let products = [];

fetch(
    "https://raw.githubusercontent.com/alejandrolemamarques/2.2.-E-commerce/main/data/products.json"
)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        products = data.products;
        console.log("Products loaded successfully:", products);
    })
    .catch((error) => {
        console.error("Error loading products:", error);
        // Fallback products if loading fails
        products = [
            { id: 1, name: "Cooking oil", price: 10.5 },
            { id: 2, name: "Pasta", price: 6.25 },
            { id: 3, name: "Instant cupcake mixture", price: 5 },
        ];
    });

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Load cart from sessionStorage when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        // Update the cart count in the navbar
        const cartCount = document.getElementById("count_product");
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }
});

// Function to save cart to sessionStorage
function saveCart() {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Exercise 1
function buy(id, event) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    // Get the button that was clicked
    const clickedButton = event.target;

    // Check if the button is already in the "added" state
    // This prevents animation issues when clicking multiple times quickly
    if (clickedButton.dataset.processing === "true") {
        // Button is already being processed, just update the cart quantity
        // Check if the product is already in the cart
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                cart[i].quantity++;

                // Update the button text to show the new quantity
                const currentQuantity = cart[i].quantity;
                clickedButton.textContent = `Added (${currentQuantity})!`;

                // Update the cart count
                const cartCount = document.getElementById("count_product");
                cartCount.textContent = cart.length;

                // Save cart to sessionStorage
                saveCart();

                return;
            }
        }

        // If we get here, the item wasn't in the cart yet (shouldn't happen)
        cart.push({ id, quantity: 1 });

        // Update the cart count
        const cartCount = document.getElementById("count_product");
        cartCount.textContent = cart.length;

        // Save cart to sessionStorage
        saveCart();

        return;
    }

    // Mark the button as being processed
    clickedButton.dataset.processing = "true";

    // Store the original text for later restoration
    const originalText = clickedButton.textContent.trim();

    // Add the 'added-to-cart' class to the button
    clickedButton.classList.add("added-to-cart");

    // Check if the product is already in the cart
    let currentQuantity = 1;
    let itemInCart = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity++;
            currentQuantity = cart[i].quantity;
            itemInCart = true;
            break;
        }
    }

    // If not in cart, add it
    if (!itemInCart) {
        cart.push({ id, quantity: 1 });
    }

    // Update the button text to show quantity if more than 1
    if (currentQuantity > 1) {
        clickedButton.textContent = `Added (${currentQuantity})!`;
    } else {
        clickedButton.textContent = "Added!";
    }

    // Update the cart count
    const cartCount = document.getElementById("count_product");
    cartCount.textContent = cart.length;

    // Save cart to sessionStorage
    saveCart();

    // After a delay, remove the class and restore the original text
    setTimeout(() => {
        clickedButton.classList.remove("added-to-cart");
        clickedButton.textContent = originalText;
        // Reset the processing flag
        clickedButton.dataset.processing = "false";
    }, 1500);
}

// Exercise 2
function cleanCart() {
    cart = [];
    printCart();

    // Update the cart count in the navbar
    const cartCount = document.getElementById("count_product");
    cartCount.textContent = cart.length;

    // Save cart to sessionStorage
    saveCart();
}

// Exercise 3
function calculateTotal() {
    const total = cart.reduce((sum, cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        let subtotal = 0;
        if (cartItem.subtotalWithDiscount) {
            subtotal = cartItem.subtotalWithDiscount;
        } else {
            subtotal = product.price * cartItem.quantity;
        }
        return sum + subtotal;
    }, 0);
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart = cart.map((cartItem) => {
        // Find the corresponding product details for this cart item
        const product = products.find((p) => p.id === cartItem.id);

        // If product has no offer, return cart item unchanged
        if (!product.offer) return cartItem;

        // Destructure needed values from product and cart item
        const { offer, price } = product;
        const { quantity } = cartItem;

        // If quantity is less than required for offer, return unchanged
        if (quantity < offer.number) return cartItem;

        const subtotalWithDiscount = Math.round(
            quantity * price * (1 - offer.percent / 100),
            2
        );

        // Return cart item with added subtotal discount field
        return { ...cartItem, subtotalWithDiscount };
    });
}

// Exercise 5
function printCart() {
    applyPromotionsCart();
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartContainer = document.getElementById("cart_list");
    const totalPrice = document.getElementById("total_price");
    cartContainer.innerHTML = "";

    cart.forEach((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        let subtotal = 0;
        if (cartItem.subtotalWithDiscount) {
            subtotal = cartItem.subtotalWithDiscount;
        } else {
            subtotal = product.price * cartItem.quantity;
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${product.name}</th>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                ${cartItem.quantity}
                <button class="btn btn-sm text-danger remove-item" onclick="removeItemAndUpdate(${
                    product.id
                })">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </td>
            <td>$${subtotal.toFixed(2)}</td>
        `;
        cartContainer.appendChild(row);
    });

    totalPrice.textContent = calculateTotal().toFixed(2);
}

// Function to remove an item and update the cart display
function removeItemAndUpdate(id) {
    removeFromCart(id);
    printCart();

    // Update the cart count in the navbar
    const cartCount = document.getElementById("count_product");
    cartCount.textContent = cart.length;

    // Save cart to sessionStorage
    saveCart();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    // Find the item in the cart
    const itemCartIndex = cart.findIndex((item) => item.id === id);
    const product = products.find((item) => item.id === id);

    // If item not found, return early
    if (itemCartIndex === -1) return;

    // Get the cart item
    const itemCart = cart[itemCartIndex];
    const newQuantity = itemCart.quantity - 1;

    // If quantity will be 0, remove the item completely
    if (newQuantity === 0) {
        cart.splice(itemCartIndex, 1);
    } else {
        // Otherwise decrease quantity by 1
        if (product.offer && newQuantity < product.offer.number) {
            delete itemCart.subtotalWithDiscount;
        }

        cart[itemCartIndex] = {
            ...itemCart,
            quantity: newQuantity,
        };
    }

    // Save cart to sessionStorage after modification
    saveCart();
}

function open_modal() {
    printCart();
}
