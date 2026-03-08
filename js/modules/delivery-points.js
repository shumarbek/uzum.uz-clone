const pointsBtn = document.querySelector(".pointsBtn");
const vacancyBtn = document.querySelector(".vacancyBtn");
const pointsDiv = document.querySelector(".delivery-points__locations")
const vacancyDiv = document.querySelector(".vakansiya")

let n = false;
let m = false;

pointsBtn.addEventListener("click", () => {
    if (!n) {
        pointsDiv.classList.add("active");
        vacancyDiv.classList.remove("active");
        n = true;
        m = false;

        pointsBtn.style.color = "#000";
        vacancyBtn.style.color = "#777";
    }
});

vacancyBtn.addEventListener("click", () => {
    if (!m) {
        pointsDiv.classList.remove("active");
        vacancyDiv.classList.add("active");
        n = false;
        m = true;

        vacancyBtn.style.color = "#000";
        pointsBtn.style.color = "#777";
    }
});



class Points {
    constructor(id, address, dressing_room, parentElement) {
        this.id = id
        this.address = address
        this.dressing_room = dressing_room
        this.parentElement = document.querySelector(parentElement)
    }

    render() {
        const newElement = document.createElement("a");
        newElement.className = "delivery-points__locations__list__card";
        newElement.href = "#";
        newElement.innerHTML = `
            <h2 class="delivery-points__locations__list__card__title">${this.address}</h2>
            <div class="delivery-points__locations__list__card__info">
                <div>
                    <img src="../assets/icons/delivery-points/hanger.png" alt="hanger">
                </div>
                <p>Kiyib koʻrish joyi ${this.dressing_room? "bor" : "yoʻq"}</p>
            </div>
            <div class="delivery-points__locations__list__card__info">
                <div>
                    <img src="../assets/icons/delivery-points/pin.png" alt="pin">
                </div>
                <p>${this.address}</p>
            </div>
            <div class="delivery-points__locations__list__card__info">
                   <div>
                        <img src="../assets/icons/delivery-points/clock.png" alt="clock">
                    </div>
                    <table>
                        <tr>
                            <td>Dushanba:</td>
                            <td>10:00 - 20:00</td>
                        </tr>
                        <tr>
                            <td>Seshanba:</td>
                            <td>10:00 - 20:00</td>
                        </tr>
                        <tr>
                            <td>Chorshanba:</td>
                            <td>10:00 - 20:00</td>
                        </tr>
                        <tr>
                            <td>Payshanba:</td>
                            <td>10:00 - 20:00</td>
                        </tr>
                        <tr>
                            <td>Juma:</td>
                            <td>10:00 - 20:00</td>
                        </tr>
                        <tr>
                            <td>Shanba:</td>
                            <td>10:00 - 20:00</td>
                        </tr>
                        <tr>
                            <td>Yakshanba:</td>
                            <td>10:00 - 20:00</td>
                        </tr>
                    </table>
                </div>`

        this.parentElement.appendChild(newElement);
    }
}

points.forEach(point => {
    const pointInstance = new Points(point.id, point.address, point.dressing_room, ".delivery-points__locations__list__cards");
    pointInstance.render();
});

const pointsCount = document.querySelector(".delivery-points__locations__numbers span");
pointsCount.textContent = points.length;