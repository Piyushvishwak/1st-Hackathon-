// Frontend JavaScript code
// Assume there are functions to handle adding/removing items from the cart and initiating checkout

function addToCart(productId, quantity) {
    fetch('/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, quantity })
    })
    .then(response => {
        if (response.ok) {
            console.log('Product added to cart');
            // Update UI to reflect changes (e.g., update cart icon)
        } else {
            console.error('Failed to add product to cart');
        }
    })
    .catch(error => console.error('Error:', error));
}

function removeFromCart(productId) {
    fetch('/cart/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
    })
    .then(response => {
        if (response.ok) {
            console.log('Product removed from cart');
            // Update UI to reflect changes (e.g., update cart icon)
        } else {
            console.error('Failed to remove product from cart');
        }
    })
    .catch(error => console.error('Error:', error));
}

function checkout() {
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('Checkout successful');
            // Redirect user to a thank you page or display a success message
        } else {
            console.error('Checkout failed');
        }
    })
    .catch(error => console.error('Error:', error));
}
