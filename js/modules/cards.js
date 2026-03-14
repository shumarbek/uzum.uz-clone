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

// ── Product Quick-View Modal ───────────────────────────────
function openProductModal(productId) {
    if (typeof products === 'undefined') return;
    const p = products.find(function(pr) { return pr.id === productId; });
    if (!p) return;

    var qty = 1;
    var monthlyPayment = Math.round(p.byCard / 24);
    var deliveryText = (p.deliveryTime === 'Ertaga' || !p.deliveryTime)
        ? 'Ertaga yetkazib beramiz' : p.deliveryTime + ' da yetkazib beramiz';
    var oldPriceHTML = p.price > p.byCard
        ? `<span class="product-modal__price__old">${p.price.toLocaleString('ru-RU').replace(/,/g,' ')} so'm</span>` : '';
    var cheapestHTML = p.isCheapest
        ? `<div class="product-modal__cheapest">ARZON NARX KAFOLATI</div>` : '';

    var overlay = document.createElement('div');
    overlay.className = 'product-modal__overlay';
    overlay.innerHTML = `
        <div class="product-modal" role="dialog">
            <button class="product-modal__close" id="modalClose">✕</button>
            <h2 class="product-modal__title">${p.name}</h2>
            <div class="product-modal__kafolat">
                <img src="./assets/icons/checked.png" alt="kafolat">
                <span>KAFOLAT 12 OY</span>
            </div>
            <div class="product-modal__layout">
                <div class="product-modal__left">
                    <div class="product-modal__img">
                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    <a href="./product.html?id=${p.id}" class="product-modal__img__link">
                        Mahsulot haqidagi bor ma'lumot ›
                    </a>
                </div>
                <div class="product-modal__right">
                    ${cheapestHTML}
                    <div class="product-modal__price__main">${p.byCard.toLocaleString('ru-RU').replace(/,/g,' ')} so'm</div>
                    <div class="product-modal__price__sub">
                        Uzum kartasiz ${p.price.toLocaleString('ru-RU').replace(/,/g,' ')} so'm
                        ${oldPriceHTML}
                    </div>
                    <div class="product-modal__installment">
                        Oyiga <strong>${monthlyPayment.toLocaleString('ru-RU').replace(/,/g,' ')} so'mdan</strong>&nbsp; muddatli to'lov
                        <span>›</span>
                    </div>
                    <div class="product-modal__qty__row">
                        <span class="product-modal__qty__label">Miqdor:</span>
                        <div class="product-modal__qty">
                            <button class="modal__qty__btn" id="modalQtyMinus">−</button>
                            <span class="modal__qty__num" id="modalQtyNum">1</span>
                            <button class="modal__qty__btn" id="modalQtyPlus">+</button>
                        </div>
                        <span class="product-modal__qty__limit">💧 2 dona xarid qilish mumkin</span>
                    </div>
                    <button class="product-modal__add__btn" id="modalAddBtn">
                        Savatga qo'shish
                        <small>Ertaga yetkazib beramiz</small>
                    </button>
                    <div class="product-modal__delivery">
                        <strong>${deliveryText}</strong>
                        <p>Uzum buyurtmalarni topshirish punktida yoki kuryer orqali</p>
                    </div>
                </div>
            </div>
        </div>`;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    function close() {
        overlay.remove();
        document.body.style.overflow = '';
    }

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) close();
    });
    overlay.querySelector('#modalClose').addEventListener('click', close);

    overlay.querySelector('#modalQtyMinus').addEventListener('click', function() {
        if (qty > 1) {
            qty--;
            overlay.querySelector('#modalQtyNum').textContent = qty;
        }
    });

    overlay.querySelector('#modalQtyPlus').addEventListener('click', function() {
        if (qty < 99) {
            qty++;
            overlay.querySelector('#modalQtyNum').textContent = qty;
        }
    });

    overlay.querySelector('#modalAddBtn').addEventListener('click', function() {
        if (typeof addToCart === 'function') {
            addToCart(p, qty);
        }
        close();

        // Show brief toast
        showCartToast();
    });
}

function showCartToast() {
    var existing = document.querySelector('.cart__toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'cart__toast';
    toast.innerHTML = `<span>✓</span> Savatchaga qo'shildi`;
    document.body.appendChild(toast);
    setTimeout(function() { toast.classList.add('cart__toast--show'); }, 10);
    setTimeout(function() {
        toast.classList.remove('cart__toast--show');
        setTimeout(function() { toast.remove(); }, 300);
    }, 2200);
}

// Navigate to product page when card is clicked (not on buttons)
document.addEventListener('click', function(e) {
    const card = e.target.closest('.productCard');
    if (!card) return;

    if (e.target.closest('.productCard__cartBtn')) {
        const btn = card.querySelector('.productCard__cartBtn');
        if (btn && btn.value) {
            openProductModal(parseInt(btn.value));
        }
        return;
    }

    if (e.target.closest('.productCard__wishlistBtn')) return;

    const cartBtn = card.querySelector('.productCard__cartBtn');
    if (cartBtn && cartBtn.value) {
        window.location.href = `./product.html?id=${cartBtn.value}`;
    }
});

let bigParent = ['.popular__products__container', '.wishes__empty__recommendations__cards']
bigParent.forEach(parent => {
    if (document.querySelector(parent)) {
        let i = 0;
        products.forEach(product => {
            if (i < 10) {
                new Product(product.id, product.name, product.image, product.orginal, product.isCheapest, product.isNew, product.price, product.byCard, product.credit, product.rating, product.comments, product.deliveryTime, document.querySelector(parent)).render();
                i++;
            }
        })
    }
})



let bigCheaperParent = '.cheaper__products__container'

if (document.querySelector(bigCheaperParent)) {
    function shuffleArray(array) {
        const shuffled = [...array]
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
    }

    const cheapestProducts = products.filter(product => product.isCheapest)
    const randomProducts = shuffleArray(cheapestProducts).slice(0, 10)

    let k = 0;
    randomProducts.forEach(product => {
        if (k < 10) {
            new Product(product.id, product.name, product.image, product.orginal, product.isCheapest, product.isNew, product.price, product.byCard, product.credit, product.rating, product.comments, product.deliveryTime, document.querySelector('.cheaper__products__container')).render()
            k++;
        }
    })
}
