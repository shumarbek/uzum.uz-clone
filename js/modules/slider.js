class Slider {
    constructor(name, image, link, parent) {
        this.name = name
        this.image = image
        this.link = link
        this.parent = parent
    }

    render() {
        const element = document.createElement("a")
        element.href = this.link ? this.link : "#"
        element.className = "slide"
        element.target = "_blank"

        element.innerHTML = `
            <img src="${this.image}" alt="${this.name}">
        `

        this.parent.appendChild(element)
    }
}


const bannerParent = document.querySelector(".slider__banners")
const dotsParent = document.querySelector(".slider__items")

sliderData.forEach((item, i) => {

    const slide = new Slider(item.name, item.image, item.link, bannerParent)
    slide.render()

    const dot = document.createElement("button")
    dot.className = "slider__item"

    if (i === 0) {
        dot.classList.add("active")
    }

    dotsParent.appendChild(dot)
})


const slides = document.querySelectorAll(".slider__banners .slide")
const dots = document.querySelectorAll(".slider__item")

let index = 0

if (slides.length > 0) {
    slides[0].classList.add("active")
}

function showSlide(i) {

    slides.forEach(s => s.classList.remove("active"))
    dots.forEach(d => d.classList.remove("active"))

    slides[i].classList.add("active")
    dots[i].classList.add("active")
}

function autoSlide() {

    index++

    if (index >= slides.length) {
        index = 0
    }

    showSlide(index)
}

setInterval(autoSlide, 4000)


dots.forEach((dot, i) => {

    dot.addEventListener("click", () => {

        index = i
        showSlide(index)

    })

})