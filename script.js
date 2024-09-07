

const item = document.querySelector('ul')

// Função para exibir todos os produtos na tela
const showAll = (products) => {
    // Limpa o conteúdo anterior da lista para evitar duplicação
    item.innerHTML = ''

    products.forEach(product => {
        const li = document.createElement('li')
        li.innerHTML = `
            <img src=${product.src} alt="${product.name}">
            <p>${product.name}</p>
            <p><b>R$</b><b class="item-price">${product.price.toFixed(2)}</b></p>
        `
        item.appendChild(li)
    })
}

// Função para aplicar o desconto de 10%
const discount10percent = () => {
    const newPrices = menuOptions.map((product) => {
        return {
            ...product,
            price: product.price * 0.9,
        }
    })

    // Exibir os produtos com os preços atualizados
    showAll(newPrices)
}

const sumAll = () =>{
    const sumAllItems = menuOptions.reduce((acc,curr) => acc + curr.price, 0)
    item.innerHTML = `
    <li> 
    <p>O preço total dos itens é de <b>R$</b><b class="item-price"> ${sumAllItems.toFixed(2)}</b></p>
    </li>
    ` 
}

const filterAll = () => {
    const filterVegan = menuOptions.filter((product) => product.vegan === true)
    showAll(filterVegan)
}
