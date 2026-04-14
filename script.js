function filterProduct(category, bgColor) {
    // Background color change karein
    document.getElementById("main-body").style.backgroundColor = bgColor;

    // Active button style change karein
    let buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
        if (btn.innerText.toLowerCase().includes(category.toLowerCase()) || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Products filter karein
    let cards = document.querySelectorAll(".product-card");
    cards.forEach((card) => {
        if (category === "all") {
            card.classList.remove("hide");
        } else {
            if (card.classList.contains(category)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        }
    });
}
