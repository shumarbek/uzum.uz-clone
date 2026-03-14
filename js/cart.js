// ============================================================
//  cart.js — Savatcha: localStorage utility + sahifa render
// ============================================================

const CART_KEY = 'uzum_cart';

function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product, qty) {
    qty = qty || 1;
    const cart = getCart();
    const existing = cart.find(function(i) { return i.productId === product.id; });
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            cartId: product.id + '_' + Date.now(),
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            byCard: product.byCard,
            credit: product.credit,
            isCheapest: product.isCheapest,
            deliveryTime: product.deliveryTime || 'Ertaga',
            qty: qty
        });
    }
    saveCart(cart);
    updateCartBadge();
}

function removeFromCart(cartId) {
    const cart = getCart().filter(function(i) { return i.cartId !== cartId; });
    saveCart(cart);
    updateCartBadge();
}

function updateCartItemQty(cartId, qty) {
    const cart = getCart();
    const item = cart.find(function(i) { return i.cartId === cartId; });
    if (item) {
        if (qty < 1) qty = 1;
        item.qty = qty;
        saveCart(cart);
    }
    updateCartBadge();
}

function getCartCount() {
    return getCart().reduce(function(sum, i) { return sum + i.qty; }, 0);
}

function updateCartBadge() {
    const count = getCartCount();
    const badges = document.querySelectorAll('.cart__badge');
    badges.forEach(function(b) {
        b.textContent = count;
        b.style.display = count > 0 ? 'flex' : 'none';
    });
    const cartSpans = document.querySelectorAll('.cartBtn__text');
    cartSpans.forEach(function(s) { s.textContent = 'Savat' + (count > 0 ? '' : ''); });
}

// ── Cart page rendering ────────────────────────────────────
function fmt(n) {
    return n.toLocaleString('ru-RU').replace(/,/g, ' ');
}

function renderCartPage() {
    const app = document.getElementById('cartApp');
    if (!app) return;

    const cart = getCart();

    if (cart.length === 0) {
        renderEmptyCart(app);
        return;
    }

    renderFullCart(app, cart);
}

function renderEmptyCart(app) {
    app.innerHTML = `
    <section class="cart-section">
        <div class="container">
            <div class="cart__empty">
                <div class="cart__empty__img">
                    <img src="./assets/images/cart.png" alt="Bo'sh savatcha" onerror="this.style.fontSize='80px';this.outerHTML='<div style=\'font-size:80px\'>🛒</div>'">
                </div>
                <h2 class="cart__empty__title">Savatingiz hozircha bo'sh</h2>
                <p class="cart__empty__desc">Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali<br>topishingiz yoki to'plamlarni ko'rishingiz mumkin</p>
                <a href="./index.html" class="cart__empty__btn">Bosh sahifa</a>
            </div>
            <div class="cart__recommendations">
                <h2 class="cart__recommendations__title">Bu mahsulot bilan quyidagilar xarid qilinadi</h2>
                <div class="popular__products__container cart__rec__cards"></div>
            </div>
        </div>
    </section>`;

    // Render recommendation cards
    if (typeof products !== 'undefined') {
        var container = app.querySelector('.cart__rec__cards');
        products.slice(0, 10).forEach(function(pr) {
            new Product(pr.id, pr.name, pr.image, pr.orginal, pr.isCheapest, pr.isNew,
                pr.price, pr.byCard, pr.credit, pr.rating, pr.comments, pr.deliveryTime, container).render();
        });
    }
}

function buildCartItemHTML(item) {
    const deliveryLabel = (item.deliveryTime === 'Ertaga' || !item.deliveryTime)
        ? 'Ertaga yetkazib beramiz' : item.deliveryTime + ' da yetkazib beramiz';
    const cheapestBadge = item.isCheapest
        ? `<div class="cart__item__badge">ARZON NARX KAFOLATI</div>` : '';

    return `
    <div class="cart__group__section">
        <div class="cart__group__delivery__label">Uzum Market yetkazib berishi</div>
        <div class="cart__group__delivery__title">${deliveryLabel}</div>
        <div class="cart__item" data-cart-id="${item.cartId}">
            <label class="cart__item__check">
                <input type="checkbox" class="cart__item__checkbox" checked data-cart-id="${item.cartId}">
                <span class="cart__item__checkmark"></span>
            </label>
            <div class="cart__item__img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart__item__info">
                ${cheapestBadge}
                <p class="cart__item__name">${item.name}</p>
                <p class="cart__item__seller">Sotuvchi: <span>Uzum Market</span></p>
            </div>
            <div class="cart__item__actions">
                <button class="cart__item__remove" data-cart-id="${item.cartId}" title="Yo'q qilish">
                    <img src="./assets/icons/trash.png" alt="o'chirish" onerror="this.outerHTML='🗑'">
                </button>
                <span class="cart__item__remove__label">Yo'q qilish</span>
            </div>
            <div class="cart__item__qty">
                <button class="cart__qty__btn cart__qty__minus" data-cart-id="${item.cartId}">−</button>
                <span class="cart__qty__num">${item.qty}</span>
                <button class="cart__qty__btn cart__qty__plus" data-cart-id="${item.cartId}">+</button>
            </div>
            <div class="cart__item__price">
                <div class="cart__item__price__card">
                    <span>${fmt(item.byCard * item.qty)} so'm</span>
                    <img src="./assets/icons/uzum-card-icon.png" alt="card">
                </div>
                <div class="cart__item__price__nocart">Uzum kartasiz ${fmt(item.price * item.qty)} so'm</div>
            </div>
        </div>
    </div>`;
}

function calcSummary(cart) {
    var checked = cart; // all checked by default
    var total = checked.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
    var withCard = checked.reduce(function(s, i) { return s + i.byCard * i.qty; }, 0);
    return { total: total, withCard: withCard, count: checked.length };
}

function renderFullCart(app, cart) {
    var summary = calcSummary(cart);
    var savings = summary.total - summary.withCard;

    var itemsHTML = cart.map(buildCartItemHTML).join('');

    app.innerHTML = `
    <section class="cart-section">
        <div class="container">
            <h1 class="cart__title">Savatingiz, <span class="cart__title__count">${cart.length} mahsulot</span></h1>
            <div class="cart__layout">
                <div class="cart__left">
                    <div class="cart__group">
                        <label class="cart__select__all">
                            <input type="checkbox" id="cartSelectAll" checked>
                            <span class="cart__item__checkmark"></span>
                            <span>Hammasini yechish</span>
                        </label>
                    </div>
                    <div class="cart__items" id="cartItems">
                        ${itemsHTML}
                    </div>
                </div>
                <div class="cart__right">
                    <div class="cart__delivery__note">
                        <span class="cart__delivery__icon">👍</span>
                        <span>Topshirish punktiga yoki kuryer orqali bepul yetkazib berish</span>
                        <button class="cart__delivery__info">?</button>
                    </div>
                    <div class="cart__summary">
                        <h3 class="cart__summary__title">Buyurtmangiz</h3>
                        <div class="cart__summary__row">
                            <span>Mahsulotlar (${summary.count}):</span>
                            <span>${fmt(summary.total)} so'm</span>
                        </div>
                        <div class="cart__summary__row cart__summary__total">
                            <span>Jami</span>
                        </div>
                        <div class="cart__summary__row">
                            <span>Uzum karta bilan</span>
                            <div>
                                <div class="cart__summary__price__card">${fmt(summary.withCard)} so'm</div>
                                <div class="cart__summary__savings">Tejovingiz: ${fmt(savings)} so'm</div>
                            </div>
                        </div>
                        <div class="cart__summary__row">
                            <span>Uzum kartasiz</span>
                            <span>${fmt(summary.total)} so'm</span>
                        </div>
                        <button class="cart__checkout__btn">Rasmiylashtirish ga o'tish</button>
                    </div>
                </div>
            </div>
            <div class="cart__recommendations">
                <h2 class="cart__recommendations__title">Bu mahsulot bilan quyidagilar xarid qilinadi</h2>
                <div class="popular__products__container cart__rec__cards"></div>
            </div>
        </div>
    </section>`;

    // Render recommendation cards
    if (typeof products !== 'undefined') {
        var container = app.querySelector('.cart__rec__cards');
        products.slice(0, 10).forEach(function(pr) {
            new Product(pr.id, pr.name, pr.image, pr.orginal, pr.isCheapest, pr.isNew,
                pr.price, pr.byCard, pr.credit, pr.rating, pr.comments, pr.deliveryTime, container).render();
        });
    }

    bindCartEvents();
}

function bindCartEvents() {
    // Remove buttons
    document.querySelectorAll('.cart__item__remove').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var cartId = btn.dataset.cartId;
            removeFromCart(cartId);
            renderCartPage();
        });
    });

    // Qty minus
    document.querySelectorAll('.cart__qty__minus').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var cartId = btn.dataset.cartId;
            var cart = getCart();
            var item = cart.find(function(i) { return i.cartId === cartId; });
            if (item) {
                if (item.qty <= 1) {
                    removeFromCart(cartId);
                } else {
                    updateCartItemQty(cartId, item.qty - 1);
                }
                renderCartPage();
            }
        });
    });

    // Qty plus
    document.querySelectorAll('.cart__qty__plus').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var cartId = btn.dataset.cartId;
            var cart = getCart();
            var item = cart.find(function(i) { return i.cartId === cartId; });
            if (item) {
                updateCartItemQty(cartId, item.qty + 1);
                renderCartPage();
            }
        });
    });
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    renderCartPage();
});
