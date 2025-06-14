document.addEventListener('DOMContentLoaded', () => {


    const products = [
        {id: 1, name: "Product 1", price: 19.99},
        {id: 2, name: "Product 2", price: 29.99},
        {id: 3, name: "Product 3", price: 59.999},
    ]

    const ProductList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartTotalMessage = document.getElementById("cart-total");
    const emptyCartMessage = document.getElementById("empty-cart")
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");


    products.forEach((product) => {
        const productItem = document.createElement('div')
        productItem.classList.add('product')
        productItem.innerHTML = `
        <span>${product.name} -  $${product.price.toFixed(2)}<span/>
        <button data-id="${product.id}">Add to cart<button/>
        `
        ProductList.appendChild(productItem)
    })
    cart = []

    ProductList.addEventListener('click', (e) => {
        if(e.target.tagName === "BUTTON"){
            const productId = parseInt(e.target.getAttribute('data-id'))
            const product = products.find((product) => product.id === productId)
            cart.push(product)
        }
        renderCart()
    })

    const renderCart = () => {
        if(cart.length>0){
            cartTotalMessage.classList.remove('hidden')
            emptyCartMessage.classList.add('hidden')
            cart.forEach((cartItem) => {
                const cartDiv = document.createElement('div')
                cartDiv.innerHTML = `
                <span>${cartItem.name} - $${cartItem.price.toFixed(2)}<span/>
                `
                cartTotalMessage.appendChild(cartDiv)
            })

        }
    }


})