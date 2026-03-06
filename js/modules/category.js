class CategoryMenu {
    constructor(data) {
        this.data = data
        this.left = document.querySelector(".catalog-left")
        this.right = document.querySelector(".catalog-right")
        this.render()
    }

    render() {
        this.data.forEach(cat => {
            const item = document.createElement("div")
            item.className = "catalog-item"
            item.onclick = () => {
                window.location.href = `catalog.html?category=${cat.slug}`
            }
            item.innerHTML = `
                <div class="catalog-icon">
                    <img src="${cat.icon}" alt="${cat.name}">
                </div>
                <span class="catalog-name">${cat.name}</span>
                <div class="catalog-arrow">
                    <img src="./assets/icons/down-arrow.png" alt="arrow">
                </div>
            `
            item.addEventListener("mouseenter", () => {
                this.renderSub(cat)
            })
            this.left.append(item)
        })
    }

    renderSub(cat) {
        this.right.innerHTML = ""

        Object.entries(cat.items).forEach(([title, subs]) => {
            const col = document.createElement("div")
            col.className = "catalog-col"
            col.innerHTML = `<h4>${title}</h4>`

            Object.keys(subs).forEach(sub => {
                const link = document.createElement("a")
                link.href = "#"
                link.textContent = sub
                col.append(link)
            })
            this.right.append(col)
        })
    }
}

new CategoryMenu(categories)