const item = document.querySelector('.items')



const showAll = (product) =>{

const copyText = document.querySelector (".marketText")
copyText.style.display = 'none'


let myLi = ''
    product.forEach(product => {
        
        myLi += `
         
            <li>
                <img src= ${product.src} alt=${product.name}>
                <p>${product.name}</p>
                <p><b>R$</b><b class="item-price">${product.price.toFixed(2)}</b></p>
            </li>
        `
        })        
        item.innerHTML = myLi

}
const discount = () =>{
    const discount10 = menuOptions.map((product) => ({
        ...product, //spread operator, pega o nome dado a variável e acumula as informações que já possuem e muda o que pede em seguida
        price: product.price * 0.9,
    }))

    showAll(discount10)
  
}

const sumAll = () => {
    const sumItens = menuOptions.reduce ((acc, curr) =>acc + curr.price, 0)
    item.innerHTML =
    `
        <li>
            <p>O valor total é de:<b>R$</b><b class="item-price">${sumItens.toFixed(2)}</b></p>
        </li>
    `
}

const filterAll = () =>{
    const randownFilter = menuOptions.filter(item =>item.vegan === true)
    showAll(randownFilter)
}

const hiddenMarketText = () =>{
    let hiddenText = 
    showAll(hiddenText)
}


