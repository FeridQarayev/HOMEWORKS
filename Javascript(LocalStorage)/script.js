const nameInp = document.getElementById('nameInp')
const categoryInp = document.getElementById('categoryInp')
const brandInp = document.getElementById('brandInp')
const priceInp = document.getElementById('priceInp')
const addBtn = document.getElementById('addBtn')
const tableBody = document.getElementById('tableBody')
const wishlistCount = document.getElementById('wishlistCount')
const cardsBody = document.getElementsByClassName('cards__body')[0]
const table = document.getElementsByClassName('table')[0]

let Products = []
let WishListProducts = []
let index = 1

if (localStorage.getItem('products')) {
    Products = JSON.parse(localStorage.getItem('products'))
    renderList(Products)
    index = Products[Products.length-1].id + 1
}
if (localStorage.getItem('wishlist')) {
    WishListProducts = JSON.parse(localStorage.getItem('wishlist'))
    renderWishList(WishListProducts)
}

class Product{
    constructor(name,category,brand,price){
        this.id = index,
        this.name = name,
        this.category = category,
        this.brand = brand,
        this.price = price
    }
}

addBtn.addEventListener('click',()=>{
    if (nameInp.value=='') return alert("Name is not exist")
    if (categoryInp.value=='') return alert("Category is not exist")
    if (brandInp.value=='') return alert("Brand is not exist")
    if (priceInp.value=='') return alert("Price is not exist")

    AddProduct()

    nameInp.value = ''
    categoryInp.value = ''
    brandInp.value = ''
    priceInp.value = ''
})



function AddProduct(){
    let nameVal = nameInp.value
    let categoryVal = categoryInp.value
    let brandVal = brandInp.value
    let priceVal = priceInp.value
    let product = new Product(nameVal,categoryVal,brandVal,priceVal)
    index ++

    Products.push(product)
    localStorage.setItem('products',JSON.stringify(Products))
    renderList(Products)
}

function renderList(array){
    let innerHTML = ''

    for (let i = 0; i < array.length; i++) {
        innerHTML+=`<div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">${array[i].id} ${array[i].name}</h5>
          <p class="card-text">${array[i].category}</p>
          <p class="card-text">${array[i].brand}</p>
          <p class="card-text">$${array[i].price}</p>
          <a id="${array[i].id}" href="#" class="btn btn-primary addwish">Add to wishlist</a>
        </div>
      </div>`
    }
    cardsBody.innerHTML = innerHTML

    const wishBtn = document.getElementsByClassName('addwish')
    for (let i = 0; i < wishBtn.length; i++) {
        wishBtn[i].addEventListener('click',(e)=>{
            AddProductWishList(e.target.id)
        })
    }
}

function AddProductWishList(id){
    let addedProduct = Products.find((product)=>product.id == id)

    WishListProducts.push(addedProduct)
    localStorage.setItem('wishlist',JSON.stringify(WishListProducts))
    renderWishList(WishListProducts)
}

function renderWishList(array){
    let innerHTML = ''
    table.style.display = 'block'
    wishlistCount.style.display = 'block'
    wishlistCount.textContent = array.length

    for (let i = 0; i < array.length; i++) {
        innerHTML+= `<tr>
        <td>${array[i].id}</td>
        <td>${array[i].name}</td>
        <td>${array[i].category}</td>
        <td>${array[i].brand}</td>
        <td>${array[i].price}</td>
      </tr>`
    }
    tableBody.innerHTML = innerHTML
}
