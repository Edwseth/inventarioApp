async function fetchProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista existente
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Quantity: ${product.quantity}`;
        productList.appendChild(li);
    });
}

async function addProduct(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;

    const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, quantity })
    });

    if (response.ok) {
        document.getElementById('product-form').reset();
        fetchProducts(); // Actualizar la lista de productos
    }
}

document.getElementById('product-form').addEventListener('submit', addProduct);
window.onload = fetchProducts; // Cargar productos al iniciar la página
