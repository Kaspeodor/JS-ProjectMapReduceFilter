// Elementos
const item = document.querySelector('.items');
const cart = document.getElementById('cart');
const cartItemsContainer = document.getElementById('cartItems');
const totalAmountEl = document.getElementById('totalAmount');
const finalizeButton = document.getElementById('finalizeButton');
const discountButton = document.getElementById('discountButton'); // Novo botão de desconto
let cartItems = [];
let totalAmount = 0;

// Exibe todos os itens do menu
const showAll = (productList) => {
    document.querySelector('.marketText').style.display = 'none';
    let myLi = '';
    productList.forEach((product, index) => {
        myLi += `
            <li onclick="addToCart(${index})">
                <img src=${product.src} alt=${product.name}>
                <p>${product.name}</p>
                <p><b>R$</b><b class="item-price">${product.price.toFixed(2)}</b></p>
            </li>
        `;
    });
    item.innerHTML = myLi;
};

// Adiciona itens ao carrinho
const addToCart = (index) => {
    const selectedItem = menuOptions[index];
    cartItems.push(selectedItem);
    totalAmount += selectedItem.price;
    updateCart();
};

// Atualiza a exibição do carrinho
const updateCart = () => {
    cart.style.display = 'block'; // Exibe o carrinho
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, i) => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src=${item.src} alt=${item.name}>
                <p>${item.name}</p>
                <p>R$ ${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${i})">Remover</button>
            </div>
        `;
    });

    totalAmountEl.innerText = totalAmount.toFixed(2); // Atualiza o total
};

// Remove itens do carrinho
const removeFromCart = (index) => {
    totalAmount -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
};

// Aplica o desconto de 10%
const applyDiscount = () => {
    totalAmount *= 0.9; // Aplica um desconto de 10%
    updateCart();
};

// Finaliza a compra
const finalizePurchase = () => {
    alert(`Pedido finalizado! Total: R$ ${totalAmount.toFixed(2)}`);
    cartItems = [];
    totalAmount = 0;
    updateCart();
};

// Adiciona os event listeners para os botões
finalizeButton.addEventListener('click', finalizePurchase);
discountButton.addEventListener('click', applyDiscount);
