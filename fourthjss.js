// Sample product data (replace with actual data from backend)
const products = [
    { name: "Product 1", category: "electronics", price: 100, popularity: 5 },
    { name: "Product 2", category: "clothing", price: 50, popularity: 3 },
    // Add more product objects as needed
];

// Function to filter products based on search input, category, and price range
function applyFilters() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value.toLowerCase();
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;

    const filteredProducts = products.filter(product => {
        return (product.name.toLowerCase().includes(searchInput) || searchInput === "") &&
               (product.category.toLowerCase() === categoryFilter || categoryFilter === "") &&
               (product.price >= (minPrice || 0) && product.price <= (maxPrice || Infinity));
    });

    // Apply sorting based on selected option
    const sortOption = document.getElementById("sortOptions").value;
    sortProducts(filteredProducts, sortOption);
}

// Function to sort products based on selected option
function sortProducts(products, sortOption) {
    switch (sortOption) {
        case "relevance":
            // No sorting required for relevance
            break;
        case "popularity":
            products.sort((a, b) => b.popularity - a.popularity);
            break;
        case "price-low":
            products.sort((a, b) => a.price - b.price);
            break;
        case "price-high":
            products.sort((a, b) => b.price - a.price);
            break;
        default:
            break;
    }
    displayProducts(products);
}

// Function to display filtered and sorted products
function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productElement);
    });
}

// Initial display of all products
displayProducts(products);
