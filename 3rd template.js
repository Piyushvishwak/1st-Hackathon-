// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    productForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productCategory = document.getElementById('productCategory').value;
        const productPrice = document.getElementById('productPrice').value;
        const productImage = document.getElementById('productImage').value;

        const productCard = `
            <div class="col-md-4">
                <div class="product-card">
                    <img src="${productImage}" alt="${productName}" class="img-fluid">
                    <div class="card-body">
                        <h5>${productName}</h5>
                        <p>${productDescription}</p>
                        <p><strong>Category:</strong> ${productCategory}</p>
                        <p><strong>Price:</strong> $${productPrice}</p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        productList.innerHTML += productCard;
        productForm.reset();
    });
});
// JavaScript for Add Product Button
$(document).ready(function(){
    $('#productForm').submit(function(e){
        e.preventDefault(); // Prevent form submission
        // Here, you can add your code to handle form submission and product addition
        // For demonstration, I'm just showing an alert
        alert("Product added"); // Show alert
    });
});
