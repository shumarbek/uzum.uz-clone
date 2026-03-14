// ============================================================
//  product.js — barcha kontent JS tomonidan render qilinadi
// ============================================================

const CATEGORY_NAMES = {
    'household-chemicals': "Uy kimyoviy moddalari",
    'home-goods':          "Uy buyumlari",
    'beauty':              "Go'zallik va sog'liq",
    'food':                "Oziq-ovqat",
    'clothes':             "Kiyim-kechak",
    'furniture':           "Mebel",
    'tourism':             "Turizm, baliq ovi va ovchilik",
    'electronics':         "Elektronika",
    'home-appliances':     "Maishiy texnika",
    'shoes':               "Oyoq kiyimi",
    'accessories':         "Aksessuarlar"
};

// ── Yordamchi funksiyalar ──────────────────────────────────
function fmt(n) {
    return n.toLocaleString('ru-RU').replace(/,/g, ' ');
}

function stars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        const cls = rating >= i ? 'star' : rating >= i - 0.5 ? 'star half' : 'star empty';
        html += `<span class="${cls}">★</span>`;
    }
    return html;
}

// ── Mahsulotni URLdan olish ────────────────────────────────
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const p = products.find(pr => pr.id === productId) || products[0];

document.title = p.name + ' — Uzum Market';

// ── Breadcrumb HTML ────────────────────────────────────────
function buildBreadcrumb() {
    const cat = CATEGORY_NAMES[p.category] || p.category;
    return `
    <nav class="product__breadcrumb">
        <a href="./index.html">Bosh sahifa</a>
        <span class="product__breadcrumb__sep">›</span>
        <a href="./catalog.html">Barcha toifalar</a>
        <span class="product__breadcrumb__sep">›</span>
        <span>${cat}</span>
        <span class="product__breadcrumb__sep">›</span>
        <span>${p.subcategory}</span>
        <span class="product__breadcrumb__sep">›</span>
        <span>${p.name}</span>
    </nav>`;
}

// ── Meta satri ─────────────────────────────────────────────
function buildMeta() {
    const orders = p.comments > 0 ? fmt(p.comments * 3 + 500) + '+ buyurtma' : 'Yangi mahsulot';
    const ratingBlock = p.rating > 0
        ? `<a class="product__meta__link">
               <span class="product__meta__stars">${stars(p.rating)}</span>
               <span class="product__meta__rating__num">${p.rating}</span>
               <span class="product__meta__rating__count">(${fmt(p.comments)} sharh)</span>
           </a>
           <span class="product__meta__sep">·</span>`
        : '';
    return `
    <div class="product__meta">
        ${ratingBlock}
        <span>10 fotosurat</span>
        <span class="product__meta__sep">·</span>
        <span>${orders}</span>
    </div>`;
}

// ── Badgelar ───────────────────────────────────────────────
function buildBadges() {
    const disc = p.price > p.byCard
        ? Math.round((p.price - p.byCard) / p.price * 100) : 0;
    let html = '<div class="product__badges">';
    if (disc > 0)    html += `<span class="badge badge--discount">-${disc}%</span>`;
    if (p.orginal)   html += `<span class="badge badge--original">✔ ORIGINAL</span>`;
    if (p.isNew)     html += `<span class="badge badge--new">✦ YANGILIK</span>`;
    html += '</div>';
    return html;
}

// ── Galereya ───────────────────────────────────────────────
function buildGallery() {
    // 4 ta thumbnail (bitta rasmdan ko'p ko'rsatish uchun)
    const thumbs = [p.image, p.image, p.image, p.image].map((img, i) => `
        <div class="product__gallery__thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
            <img src="${img}" alt="">
        </div>`).join('');

    return `
    <div class="product__gallery">
        <div class="product__gallery__thumbs" id="galleryThumbs">${thumbs}</div>
        <div class="product__gallery__main">
            <button class="product__gallery__nav product__gallery__nav--prev" id="galleryPrev">&#8249;</button>
            <img id="galleryMainImg" src="${p.image}" alt="${p.name}">
            <button class="product__gallery__nav product__gallery__nav--next" id="galleryNext">&#8250;</button>
        </div>
    </div>`;
}

// ── O'ng panel ─────────────────────────────────────────────
function buildPanel() {
    const disc = p.price > p.byCard
        ? Math.round((p.price - p.byCard) / p.price * 100) : 0;
    const oldPriceHtml = disc > 0
        ? `<span class="old__original__price">${fmt(p.price)} so'm</span>` : '';
    const cheapestBadge = p.isCheapest
        ? `<div class="product__panel__cheapest">ARZON NARX KAFOLATI ›</div>` : '';
    const deliveryText = (p.deliveryTime === 'Ertaga' || !p.deliveryTime)
        ? 'Ertaga yetkazib beramiz'
        : `${p.deliveryTime} da yetkazib beramiz`;
    const weeklyBuyers = Math.max(12, Math.round(p.comments * 0.18));

    const tabsHtml = [24, 12, 6, 3].map(m =>
        `<button class="product__tab ${m === 24 ? 'active' : ''}" data-months="${m}">${m} oy</button>`
    ).join('');

    return `
    <div class="product__panel">

        <!-- Haftalik chegirmalar -->
        <div class="product__panel__deals">
            <span>Haftalik chegirmalar</span>
            <div class="product__panel__timer">&#9200; <span id="countdown"></span></div>
        </div>

        <div class="product__panel__body">
            ${cheapestBadge}

            <!-- Narx -->
            <div class="product__panel__price">${fmt(p.byCard)} so'm</div>
            <div class="product__panel__old">
                Uzum kartasiz Uzum
                <span class="old__card__price">${fmt(p.price)} so'm</span>
                ${oldPriceHtml}
            </div>

            <!-- Bo'lib to'lash -->
            <div class="product__installment__tabs" id="installmentTabs">${tabsHtml}</div>
            <div class="product__installment__monthly" id="installmentMonthly">
                <span class="product__installment__monthly__amount" id="monthlyAmount"></span>
                <span class="product__installment__monthly__period" id="monthlyPeriod"></span>
                <span class="product__installment__monthly__arrow">›</span>
            </div>

            <!-- Tugmalar -->
            <div class="product__btn__row">
                <button class="product__btn__quick">1 klikda xarid qilish</button>
                <button class="product__btn__wishlist" id="wishlistBtn">
                    <img src="./assets/icons/heart.png" alt="Saralangan">
                </button>
            </div>
            <button class="product__btn__cart">
                Savatga qo'shish<br>
                <small>Ertaga yetkazib beramiz</small>
            </button>

            <!-- Stok -->
            <div class="product__stock__info">
                <div class="product__stock__item">
                    <span class="stock__check">✔</span>
                    <span>5 dona xarid qilish mumkin</span>
                </div>
                <div class="product__stock__item">
                    <span class="stock__bag">🛍</span>
                    <span>Bu haftada <strong>${weeklyBuyers}</strong> kishi sotib oldi</span>
                </div>
            </div>
        </div>

        <!-- Yetkazib berish -->
        <div class="product__panel__section">
            <strong>${deliveryText}</strong>
            <p>Topshirish punktiga yoki kuryer orqali</p>
        </div>

        <!-- To'lov usullari -->
        <div class="product__panel__section">
            <strong>Qulay usulda xavfsiz to'lov</strong>
            <p>Karta orqali, naqd pulda yoki bo'lib to'lang</p>
            <div class="product__payment__methods">
                <span class="pay__badge">Uzum bank</span>
                <span class="pay__badge">Payme</span>
                <span class="pay__badge">Click</span>
                <span class="pay__badge">UMO</span>
                <span class="pay__badge">VISA</span>
                <span class="pay__badge">Mastercard</span>
            </div>
        </div>

        <!-- Qaytarish -->
        <div class="product__panel__section">
            <strong>Qaytarish oson va tez</strong>
            <p>Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz.
               <a href="#">Batafsil</a></p>
        </div>
    </div>`;
}

// ── Sharhlar ───────────────────────────────────────────────
function buildReviews() {
    if (p.rating === 0 || p.comments === 0) {
        return `<div class="product__reviews">
                    <p class="product__no__reviews">Hali sharhlar yo'q. Birinchi bo'lib sharh qoldiring!</p>
                </div>`;
    }
    const filters = ['none','brightness(0.9)','contrast(1.1)','saturate(1.2)',
                     'brightness(1.05)','contrast(0.95)','saturate(0.9)',
                     'brightness(0.85)','contrast(1.15)'];
    const photoCount = Math.min(p.comments, 9);
    const photosHtml = Array.from({length: photoCount}, (_, i) =>
        `<img class="product__reviews__photo"
              src="${p.image}"
              alt="sharh ${i + 1}"
              style="filter:${filters[i % filters.length]}">`
    ).join('');

    return `
    <div class="product__reviews">
        <div class="product__reviews__header">
            <h2 class="product__reviews__title">
                <span class="reviews__rating__num">${p.rating.toFixed(1)}</span>
                ★ · <span>${fmt(p.comments)} ta sharh</span>
            </h2>
        </div>
        <div class="product__reviews__stars">${stars(p.rating)}</div>
        <div class="product__reviews__photos">${photosHtml}</div>
    </div>`;
}

// ── O'xshash mahsulotlar ───────────────────────────────────
function buildSimilar() {
    const similar = products.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 5);
    if (similar.length === 0) return '';
    return `
    <div class="product__similar">
        <h2 class="product__similar__title">Shunga o'xshash mahsulotlar</h2>
        <div class="popular__products__container" id="similarProducts"></div>
    </div>`;
}

// ── Barcha sahifani render qilish ──────────────────────────
function renderPage() {
    const app = document.getElementById('productApp');

    app.innerHTML = `
    <section class="product-section">
        <div class="container">
            ${buildBreadcrumb()}

            <div class="product__layout">
                <!-- CHAP: sarlavha + galereya -->
                <div class="product__left">
                    <h1 class="product__title">${p.name}</h1>
                    ${buildMeta()}
                    ${buildBadges()}
                    ${buildGallery()}
                </div>

                <!-- O'NG: narx paneli -->
                <div class="product__right">
                    ${buildPanel()}
                </div>
            </div>

            ${buildReviews()}
            ${buildSimilar()}
        </div>
    </section>`;

    // ── Galereya interaktivligi ──────────────────────────
    const thumbsEl  = document.getElementById('galleryThumbs');
    const mainImg   = document.getElementById('galleryMainImg');
    const prevBtn   = document.getElementById('galleryPrev');
    const nextBtn   = document.getElementById('galleryNext');
    const imgs      = [p.image, p.image, p.image, p.image];
    let   current   = 0;

    function goTo(idx) {
        current = (idx + imgs.length) % imgs.length;
        mainImg.style.opacity = '0.5';
        setTimeout(() => { mainImg.src = imgs[current]; mainImg.style.opacity = '1'; }, 120);
        thumbsEl.querySelectorAll('.product__gallery__thumb').forEach((t, i) => {
            t.classList.toggle('active', i === current);
        });
    }

    thumbsEl.querySelectorAll('.product__gallery__thumb').forEach(t => {
        t.addEventListener('click', () => goTo(parseInt(t.dataset.index)));
    });
    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Lightbox
    mainImg.style.cursor = 'zoom-in';
    mainImg.addEventListener('click', () => {
        const lb = document.createElement('div');
        lb.className = 'product__lightbox';
        lb.innerHTML = `<button class="product__lightbox__close">✕</button>
                        <img src="${mainImg.src}" alt="">`;
        document.body.appendChild(lb);
        lb.addEventListener('click', () => lb.remove());
    });

    // ── Bo'lib to'lash tabs ──────────────────────────────
    const tabsEl   = document.getElementById('installmentTabs');
    const amountEl = document.getElementById('monthlyAmount');
    const periodEl = document.getElementById('monthlyPeriod');

    function setInstallment(m) {
        const amount = Math.round(p.byCard / m);
        amountEl.textContent = fmt(amount) + " so'm";
        periodEl.textContent = `× ${m} oy`;
        tabsEl.querySelectorAll('.product__tab').forEach(tab => {
            tab.classList.toggle('active', parseInt(tab.dataset.months) === m);
        });
    }
    tabsEl.querySelectorAll('.product__tab').forEach(tab => {
        tab.addEventListener('click', () => setInstallment(parseInt(tab.dataset.months)));
    });
    setInstallment(24);

    // ── Savatga qo'shish ─────────────────────────────────
    const cartBtn = document.querySelector('.product__btn__cart');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            if (typeof addToCart === 'function') {
                addToCart(p, 1);
                if (typeof showCartToast === 'function') showCartToast();
            }
        });
    }

    // ── Wishlist tugmasi ─────────────────────────────────
    const wishBtn = document.getElementById('wishlistBtn');
    wishBtn.addEventListener('click', () => {
        wishBtn.classList.toggle('active');
        wishBtn.querySelector('img').style.filter = wishBtn.classList.contains('active')
            ? 'invert(32%) sepia(98%) saturate(1200%) hue-rotate(300deg)' : '';
    });

    // ── Countdown timer ──────────────────────────────────
    const countdownEl = document.getElementById('countdown');
    function tick() {
        const now = new Date();
        const end = new Date();
        end.setDate(end.getDate() + 4);
        end.setHours(23, 59, 59, 0);
        const diff = end - now;
        if (diff <= 0) { countdownEl.textContent = 'Tugadi'; return; }
        const d = Math.floor(diff / 86400000);
        const h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        countdownEl.textContent = `${d} kun ${h}:${m}:${s}`;
    }
    tick();
    setInterval(tick, 1000);

    // ── O'xshash mahsulotlar render ──────────────────────
    const simContainer = document.getElementById('similarProducts');
    if (simContainer) {
        products
            .filter(pr => pr.category === p.category && pr.id !== p.id)
            .slice(0, 5)
            .forEach(pr => {
                new Product(
                    pr.id, pr.name, pr.image, pr.orginal, pr.isCheapest,
                    pr.isNew, pr.price, pr.byCard, pr.credit, pr.rating,
                    pr.comments, pr.deliveryTime, simContainer
                ).render();
            });
    }
}

// Sahifani yuklash
renderPage();
