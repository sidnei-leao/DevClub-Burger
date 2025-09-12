const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency',
         currency: 'BRL',
         })

         return newValue
}

function ShowAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += ` 
            <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price"> ${formatCurrency(product.price)}</p>
              </li>

    `
    })

    list.innerHTML = myLi
}


function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,//.....Spread Operator.........//
        price: product.price * 0.9,//Dar 10% de desconto!

    }))

    ShowAll(newPrices)
}

function sumAllItems() {
    const totalValues = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `<li>
                          <p>O valor total dos itens é de <b> ${formatCurrency(totalValues)}</b></p>
                    </li>`

    console.log(totalValues)

}



function filterAllItems() {
    const filterJustigan = menuOptions.filter((product) => product.vegan)

    ShowAll(filterJustigan)
}


//Toda vez que tiver que passar um dado dentro do AddVentListener devemos adiconar uma função anonima () => //
buttonShowAll.addEventListener('click', () => ShowAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)