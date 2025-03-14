document.addEventListener("DOMContentLoaded", () => {
    let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 100;
    let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

    const coinsDisplay = document.getElementById("coins");
    const inventoryList = document.getElementById("inventory");
    const buyButtons = document.querySelectorAll(".buy-button");

    function updateCoins() {
        coinsDisplay.textContent = coins;
        localStorage.setItem("coins", coins);
    }

    function addToInventory(itemName) {
        if (!inventory.includes(itemName)) {
            inventory.push(itemName);
            localStorage.setItem("inventory", JSON.stringify(inventory));
            renderInventory();
        }
    }

    function renderInventory() {
        inventoryList.innerHTML = "";
        inventory.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            inventoryList.appendChild(li);
        });
    }

    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const item = event.target.parentElement;
            const price = parseInt(item.getAttribute("data-price"));
            const itemName = item.querySelector("p").textContent;

            if (inventory.includes(itemName)) {
                alert("Ya tienes este objeto en tu inventario.");
            } else if (coins >= price) {
                coins -= price;
                updateCoins();
                addToInventory(itemName);
            } else {
                alert("No tienes suficientes monedas!");
            }
        });
    });

    updateCoins();
    renderInventory();
});