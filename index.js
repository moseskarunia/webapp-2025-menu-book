const menus = [{
    title: "Avocado Pesto Salad",
    description: "Home-grown vegetables with load of avocado, topped with mouthwatering pesto salad",
    photoUrl: "assets/salad.jpg",
    prices: [{
        label: "",
        price: 35
    }, {
        label: "+Grilled Salmon",
        price: 55
    }]
}, {
    title: "Triple Cheese Pizza",
    description: "Indulge yourself in this simple yet delicious delicacy",
    photoUrl: "assets/pizza.jpg",
    prices: [{
        label: "1 Slice",
        price: 15
    }, {
        label: "Pan (6 slices)",
        price: 60
    }]
}, {
    title: "Seasonal Wine",
    description: "A great meal becomes perfect when combined with a good wine",
    photoUrl: "assets/wine.jpg",
    prices: [{
        label: "Glass",
        price: 100
    }, {
        label: "Bottle",
        price: 1500
    }]
}, {
    title: "Coffee",
    description: "The best coffee you can have from the land of Indonesia",
    photoUrl: "assets/coffee.jpg",
    prices: [{
        label: "Americano",
        price: 25
    }, {
        label: "Latte",
        price: 30
    }]
}];

const cart = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
];

let menuArea = "";

for (let i = 0; i < menus.length; i++) {
    const e = menus[i];

    menuArea += `
        <div class="menu-tile">
            <div class="menu-photo">
                <img src="${e.photoUrl}" alt="${e.title}">
            </div>
            <div class="menu-tile-name">${e.title}</div>
            <div class="menu-tile-description">${e.description}</div>
            <div class="menu-price-row">
                <span class="price-description"></span>
                <div class="price-and-qty">
                    <span class="price">35</span>
                    <button onclick='substractQty(0,0)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty00">0</span>
                    <button onclick='addQty(0,0)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
            <div class="menu-price-row">
                <span class="price-description">+ Grilled Salmon</span>
                <div class="price-and-qty">
                    <span class="price">55</span>
                    <button onclick='substractQty(0,1)'>
                        <img src="assets/circle-minus.png" width="16" height="16" alt="minus-circle" />
                    </button>
                    <span class="qty" id="qty01">0</span>
                    <button onclick='addQty(0,1)'>
                        <img src="assets/circle-plus.png" width="16" height="16" alt="plus-circle" />
                    </button>
                </div>
            </div>
        </div>
    `;
}

function addQty(menuIndex, priceIndex) {
    cart[menuIndex][priceIndex] = cart[menuIndex][priceIndex] + 1;
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}

function substractQty(menuIndex, priceIndex) {
    cart[menuIndex][priceIndex] = cart[menuIndex][priceIndex] - 1;
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}