const params = new URLSearchParams(window.location.search)
const currentCategory = params.get("category")

const categoryTitle = document.querySelector(".catalogPage__title")
const categoryCount = document.querySelector(".catalogPage__count")
const categoryContainer = document.querySelector(".catalogPage__categories")
const productsContainer = document.querySelector(".catalogPage__products__container")

const selectedCategory = categories.find(cat => cat.slug === currentCategory)

if (selectedCategory) {

    categoryTitle.textContent = selectedCategory.name

    Object.keys(selectedCategory.items).forEach(item => {

        const btn = document.createElement("button")
        btn.textContent = item

        btn.addEventListener("click", () => {
            renderProducts(item)
        })

        categoryContainer.appendChild(btn)

    })

}

function renderProducts(subcategory = null) {

    productsContainer.innerHTML = ""

    let filtered = products.filter(
        product => product.category === currentCategory
    )

    if (subcategory) {

        filtered = filtered.filter(
            product => product.subcategory === subcategory
        )

    }

    categoryCount.textContent = `${filtered.length} ta tovar`

    filtered.forEach(product => {

        new Product(
            product.id,
            product.name,
            product.image,
            product.orginal,
            product.isCheapest,
            product.isNew,
            product.price,
            product.byCard,
            product.credit,
            product.rating,
            product.comments,
            product.deliveryTime,
            productsContainer
        ).render()

    })

}

renderProducts()