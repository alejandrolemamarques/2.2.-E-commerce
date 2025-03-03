var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    // Check if the product is already in the cart
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity++;
            return;
        }
    }

    // Add the product to the cart
    cart.push({ id, quantity: 1 });
}

// Exercise 2
function cleanCart() {
    cart = [];
    printCart();
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
            <td>${product.price}</td>
            <td>${cartItem.quantity}</td>
            <td>${subtotal}</td>
        `;
        cartContainer.appendChild(row);
    });

    totalPrice.textContent = calculateTotal();
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
}

function open_modal() {
    printCart();
}