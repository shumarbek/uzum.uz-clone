class Product {
    constructor(id, name, image, orginal, isCheapest, isNew, price, byCard, credit, rating, comments, deliveryTime, parent) {
        this.id = id
        this.name = name
        this.image = image
        this.orginal = orginal
        this.isCheapest = isCheapest
        this.isNew = isNew
        this.price = price
        this.byCard = byCard
        this.credit = credit
        this.rating = rating
        this.comments = comments
        this.deliveryTime = deliveryTime
        this.parent = parent
    }

    render() {
        const card = document.createElement('div')
        card.className = 'productCard'
        card.innerHTML = `
                    <div class="productCard__figure">
                        <img src="${this.image}" alt="${this.name}">
                        <button class="productCard__wishlistBtn">
                            <img src="./assets/icons/heart.png" alt="heart">
                        </button>
                        <div class="productCard__special">
                            ${this.orginal ? `
                                <div class="productCard__orginal">
                                    <div class="productCard__orginal__icon">
                                        <img src="./assets/icons/checked.png" alt="original">
                                    </div>
                                    <span>ORIGINAL</span>
                                </div>
                            ` : ''}
                            ${this.isCheapest ? `
                                <div class="productCard__cheapest">
                                    <span>ARZON NARX KAFOLATI</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div class="productCard__content">
                        <div class="productCard__price">
                            <div class="productCard__price__with__card">
                                <span>${this.byCard.toLocaleString('ru-RU').replace(',', ' ')}</span>
                                <div class="productCard__card__icon">
                                    <img src="./assets/icons/uzum-card-icon.png" alt="uzum-card">
                                </div>
                            </div>
                            <p class="productCard__price__without__card">${this.price.toLocaleString('ru-RU').replace(',', ' ')}</p>
                            <p class="productCard__price__credit">${this.credit.toLocaleString('ru-RU').replace(',', ' ')} so'm/oyiga</p>
                        </div>
                        <div class="productCard__info">
                            <p class="productCard__name">${this.name}</p>
                            ${this.isNew ? `
                                <div class="productCard__new">
                                    <div class="productCard__new__icon">
                                        <img src="./assets/icons/new-star-icon.png" alt="new-star">
                                    </div>
                                    <span>YANGILIK</span>
                                </div>
                            ` : `<div class="productCard__rating">
                                    <div class="productCard__rating__icon">
                                        <img src="./assets/icons/star.png" alt="star">
                                    </div>
                                    <span class="productCard__rating__number">${this.rating}</span>
                                    <span class="productCard__rating__comments">(${this.comments} sharhlar)</span>
                                </div>
                            `}
                        </div>
                        <button class="productCard__cartBtn" value="${this.id}">
                            <div class="productCard__cartBtn__icon">
                                <img src="./assets/icons/shopping-bag-plus.png" alt="shopping-bag-plus">
                            </div>
                            <span>${this.deliveryTime || 'Ertaga'}</span>
                        </button>
                    </div>
        `
        this.parent.appendChild(card)
    }
}

let i = 0;
products.forEach(product => {
    if(i < 10) {
        new Product(product.id, product.name, product.image, product.orginal, product.isCheapest, product.isNew, product.price, product.byCard, product.credit, product.rating, product.comments, product.deliveryTime, document.querySelector('.popular__products__container')).render();

        i++;
    }
})



// productCard larni random chiqarish #####
function shuffleArray(array) {
    const shuffled = [...array]

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
}

const cheapestProducts = products.filter(product => product.isCheapest)
const randomProducts = shuffleArray(cheapestProducts).slice(0,10)

randomProducts.forEach(product => {
    new Product(product.id, product.name, product.image, product.orginal, product.isCheapest, product.isNew, product.price, product.byCard, product.credit, product.rating, product.comments, product.deliveryTime, document.querySelector('.cheaper__products__container')
    ).render()
})