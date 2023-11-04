const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      items = document.querySelector(".items"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 1,
        "name": "Gaming headset Logitech G Pro",
        "image":"headphones.png",
        "price": 129.99
    },
    {
        "id": 2,
        "name": "Gaming headset HyperX Cloud II",
        "image":"headphoneshyperx.png",
        "price": 99.99
    },
    {
        "id": 3,
        "name": "Gaming keyboard Wooting 60HE",
        "image":"wooting.png",
        "price": 189.99
    },
    {
        "id": 4,
        "name": "Gaming mouse Logitech GPX",
        "image":"mousegpro.png",
        "price": 129.99
    },
    {
        "id": 5,
        "name": "Gaming mouse HyperX Pulsefire Haste",
        "image":"mousehyperx.png",
        "price": 49.99
    },
    {
        "id": 6,
        "name": "Gaming mousepad Fellowes",
        "image":"mousepad.png",
        "price": 9.99
    },
    {
        "id": 7,
        "name": "Gaming mousepad Logitech G840",
        "image":"mousepadlogitech.png",
        "price": 39.99
    },
    {
        "id": 8,
        "name": "Gaming mouse AOC GM500",
        "image":"mouseaoc.png",
        "price": 19.99
    }
]


let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("col");
        newDiv.classList.add("mb-4");
        newDiv.innerHTML = `
            <div class="card item-card rounded-4">
            <img src="img/${value.image}" class="card-img-top items-img">
            <div class="card-body">
            <h5 class="card-title">${value.name}</h5>
            <p class="card-text">${value.price.toLocaleString()}$</p>
            <button onclick = "addToCard(${key})" class="btn btn-primary">Add to <img class="item-icon" src="img/cart.png" alt="Cart"></button>
            </div>
        </div>
        `;
        items.appendChild(newDiv)
    })
}

initApp()


const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        // console.log(listCards);
        listCards[key].quantity = 1;
        // console.log(listCards[key].quantity);
    }

    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}$</div>

                <div>
                    <button style = "background-color:#0d6efd;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#0d6efd;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString() + " $";
        quantity.innerText = count;
    })
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}